import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch (error) {
  const paths = (process.env.NODE_PATH || "").split(":").filter(Boolean);
  const require = createRequire(import.meta.url);
  ({ chromium } = require(require.resolve("playwright", { paths })));
}

const appUrl = pathToFileURL(`${process.cwd()}/index.html`).href;

const tests = [];
const test = (name, fn) => tests.push({ name, fn });

async function openApp(page, query = "?reset") {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto(`${appUrl}${query}`, { waitUntil: "load" });
  await page.waitForSelector("#onboard");
  return errors;
}

async function onboard(page) {
  await page.locator(".vessel-opt:not(.custom-tile)").first().click();
  await waitFor(async () => !(await page.locator("#startBtn").isDisabled()), "Start button to become enabled");
  await page.locator("#startBtn").click();
  await page.locator("#main:not(.hidden)").waitFor();
}

async function waitFor(fn, label, timeout = 3000) {
  const start = Date.now();
  let lastValue;
  while (Date.now() - start < timeout) {
    lastValue = await fn();
    if (lastValue) return lastValue;
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  throw new Error(`Timed out waiting for ${label}; last value: ${lastValue}`);
}

test("loads without console errors", async ({ page }) => {
  const errors = await openApp(page);
  assert.deepEqual(errors, []);
});

test("selecting a vessel enables Start and opens the main screen", async ({ page }) => {
  await openApp(page);
  await page.locator(".vessel-opt:not(.custom-tile)").first().click();
  assert.equal(await page.locator("#startBtn").isDisabled(), false);
  await page.locator("#startBtn").click();
  await page.locator("#main:not(.hidden)").waitFor();
  assert.equal(await page.locator("#onboard").evaluate((el) => el.classList.contains("hidden")), true);
});

test("vessel tap increases the total and Undo decreases it", async ({ page }) => {
  await openApp(page);
  await onboard(page);

  const initial = Number(await page.locator("#totalNum").textContent());
  const increment = Number(await page.locator(".vbtn .vlabel").first().textContent());
  const expectedAfterAdd = initial + increment;
  await page.locator(".vbtn").first().click();
  await waitFor(
    async () => Number(await page.locator("#totalNum").textContent()) === expectedAfterAdd,
    "total to finish increasing"
  );

  const afterAdd = Number(await page.locator("#totalNum").textContent());
  assert.equal(afterAdd, expectedAfterAdd);
  await page.locator("#undoBtn").click();
  await waitFor(
    async () => Number(await page.locator("#totalNum").textContent()) === initial,
    "total to finish decreasing after undo"
  );
  assert.equal(Number(await page.locator("#totalNum").textContent()), initial);
});

test("switching to Hebrew sets document direction to rtl", async ({ page }) => {
  await openApp(page);
  await page.locator("#langBtn").click();
  await page.locator(".lang-item", { hasText: "עברית" }).click();
  assert.equal(await page.evaluate(() => document.documentElement.dir), "rtl");
});

test('Hebrew UI has no Latin text except "Sippy"', async ({ page }) => {
  await openApp(page);
  await page.locator("#langBtn").click();
  await page.locator(".lang-item", { hasText: "עברית" }).click();
  const visibleText = await page.evaluate(() => document.body.innerText.replaceAll("Sippy", ""));
  assert.equal(/[A-Za-z]/.test(visibleText), false, visibleText);
});

test("localStorage survives reload", async ({ page }) => {
  await openApp(page);
  await onboard(page);
  const expectedTotal = Number(await page.locator(".vbtn .vlabel").first().textContent());
  await page.locator(".vbtn").first().click();
  await waitFor(
    async () => Number(await page.locator("#totalNum").textContent()) === expectedTotal,
    "total to finish increasing before reload"
  );
  const beforeReload = Number(await page.locator("#totalNum").textContent());

  await page.evaluate(() => history.replaceState(null, "", location.pathname));
  await page.reload({ waitUntil: "load" });
  await page.locator("#main:not(.hidden)").waitFor();
  assert.equal(Number(await page.locator("#totalNum").textContent()), beforeReload);
});

const browser = await chromium.launch();
let failed = 0;

try {
  for (const { name, fn } of tests) {
    const page = await browser.newPage();
    try {
      await fn({ page });
      console.log(`PASS ${name}`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${name}`);
      console.error(error);
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}

if (failed > 0) {
  process.exitCode = 1;
}
