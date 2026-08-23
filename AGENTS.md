# AGENTS.md — Instructions for Codex (standing rules)

## Project
Sippy — a minimal "anti-app" water-tracking PWA. Vanilla HTML/CSS/JS; app = single file `index.html`. No account, no backend, local-only, resets at midnight. International (9 langs, RTL for he/ar), units ml/fl oz. Brand: quiet, meticulous, contemporary — NOT childish.
GitHub: origin = github.com/sookiproducts-commits/sipy (public).

## Your role
Implement coding tasks from `bridge/inbox/`, test them, report in `bridge/outbox/`, and commit + push. A review system (Claude) verifies your work and answers blockers. **You build — the gates verify.**

## HARD BOUNDARIES (never cross)
1. **Work ONLY inside this project folder** and its own git repo. Never read or write anything outside it — no `~/Library`, no home config, no system dirs, no other projects. If a task seems to need outside access, mark it BLOCKED and stop.
2. **Only touch the files listed in a task's "Files allowed".** Never edit `bridge/inbox/` (except STATUS) or Claude-owned docs (brand book, agent defs, INDEX.md).
3. **Never ask the user for permission.** You have standing autonomy inside this folder. If you lack something, that's a BLOCKED report — not a question to the user.
4. Never write or commit secrets. Keep `.gitignore` updated.

## Workflow (every run)
1. Read `bridge/STATUS.md`; open the first task in `bridge/inbox/` with status TODO. Also read any `bridge/inbox/*-ANSWER.md` — Claude's answers to earlier blockers.
2. Set its status to DOING in `bridge/STATUS.md`.
3. Implement per the spec, inside allowed files only. Run the acceptance tests locally.
4. Write `bridge/outbox/<task-id>-report.md` (see bridge/PROTOCOL.md), set STATUS to DONE.
5. **git add / commit / push** your changes to this repo (origin/main). This triggers GitHub Actions CI, which is the authoritative check.
6. If blocked at any point: write `bridge/outbox/<task-id>-BLOCKED.md` with the EXACT error and what you need, set STATUS to BLOCKED, and stop. Do NOT guess. Claude replies in `bridge/inbox/<task-id>-ANSWER.md`; you pick it up next run.

## Testing
Chromium + Playwright available. If PLAYWRIGHT_BROWSERS_PATH is set, do NOT run "playwright install".

## Teamwork (no clobber)
You own the CODE (index.html, tests, manifest, sw.js, config) via git. Claude owns docs/specs/inbox/reviews. Only the owner edits a file. See bridge/PROTOCOL.md.

## Activity log — פנקס משותף (חובה, כלל עומד)
כל פעולה שאתה מבצע — כולל בקשות ישירות של Suzanna אליך (למשל deploy, יצירת יוזרים סינתטיים) — חייבת שורה ב-`bridge/ACTIVITY.md` **מיד**, עם חמישה שדות: תאריך+שעה · מי · מה · למה+מי-ביקש · **תוצאה**. שדה ה"תוצאה" מחייב: כתוב אם הצליח / נכשל (עם השגיאה המדויקת) / ממתין — כדי שאם משהו ישתבש נדע בדיוק מה לבדוק. הוסף בסוף הטבלה, אל תמחק שורות, ו-commit יחד עם שאר העבודה. הפנקס הזה הוא גם המקור לסיכום היומי של 23:00 (ראו bridge/inbox).

## הרחבת מנדט — קודקס לוקח יותר, ומייצר סוכני-קוד משלו
כדי לחסוך במכסת Claude של Suzanna, אתה (Codex) לוקח יותר עבודה ורשאי **לייצר ולנהל סוכנים משלך** לתחומי הקוד. הגדרות הסוכנים שלך יושבות ב-`codex-agents/` (בבעלותך). דוגמאות מתאימות: `qa-runner` (הרצת Playwright/CI), `synthetic-exec` (הרצת תרחישי היוזרים הסינתטיים כשיש build), `perf-a11y` (ביצועים ונגישות), `i18n-linter` (סריקת דליפות שפה/RTL). כל סוכן כזה: פועל רק בתוך התיקייה, לא נוגע בסודות, מתעד ב-ACTIVITY.md, ומדווח ב-outbox.

**גבולות בעלות (למניעת דריסה):**
- Codex: כל הקוד (`index.html`, `tests/`, `sw.js`, `manifest`, config), `codex-agents/`, git+push, יומן+CI.
- Claude: `sippy-agents/` (הגדרות סוכני-מוצר/מותג/תוכן), מסמכים, brand book, roadmap, INDEX, `bridge/inbox/`, ביקורות.
- משותף: `bridge/ACTIVITY.md` (שניכם מוסיפים שורות, אף אחד לא מוחק), `bridge/STATUS.md`.
- כשסוכן-מוצר של Claude מבקש שינוי קוד → Claude פותח משימת `bridge/inbox/` עם "Files allowed" + בדיקות קבלה. כשקוד צריך החלטת מוצר → אתה מסמן ב-outbox ו-Claude מחליט. רק הבעלים עורך קובץ.

## כלל עומד — סנכרון יומן אחרי שינוי רואדמפ
היומן של Suzanna מוזן ממך. אם `sippy-roadmap.html` השתנה (או שקיבלת הודעה על שינוי לו״ז ב-ACTIVITY.md/inbox) — סנכרן מחדש את אירועי היומן כך שישקפו את המצב, בלי לחשוף נתיבי קבצים או פרטים פרטיים. תעד ב-ACTIVITY.md.

## תעדוף והכוונה — דרך ה-Product Manager, לא דרך Suzanna
תעדוף שוטף ופתיחת חבילות עבודה אליך (Codex) הם באחריות סוכן ה-**product-manager**. אם משימה דורשת החלטת מוצר (עדיפות קהל/שפה/מדינה לבדיקות, סדר עבודה, scope) — אל תחכה ל-Suzanna ואל תסמן BLOCKED-על-Suzanna; זו החלטת PM. Suzanna היא שער **רק** להחלטות כספיות / פרסום פומבי / תמחור / מיצוב / בלתי-הפיך. כשאתה זקוק להחלטת מוצר, כתוב ב-outbox פנייה ל-PM (Claude), לא ל-Suzanna.

## עדכון שער בדיקה — CI הוא הקובע, לא Playwright מקומי
אם הסביבה שלך לא יכולה להריץ Playwright מקומית (אין npm/דפדפן) — אל תיתקע. בצע ולידציה קלה בלי דפדפן, ואז commit+push; **GitHub Actions CI הוא שער האמת** ויריץ את הסוויטה המלאה בסביבה נקייה. הישאר BLOCKED רק על דברים שמונעים push עצמו (למשל אימות GitHub), לא על בדיקה מקומית.

## פלייבוק חסמים — נסה לפתור לבד לפני BLOCKED
לפני שאתה כותב `*-BLOCKED.md`, בדוק את `bridge/PLAYBOOK.md`. אם החסם מופיע שם — בצע את התיקון והמשך. סמן BLOCKED **רק** לפריטים ברשימת ההסלמה (אימות GitHub, כסף, פומבי, תמחור, מיצוב). זה מקטין דרסטית את מספר הפעמים שמשהו מחכה לבן אדם.
