# TASK-01 — תשתית פרודקשן (PWA + deploy + tests + git)
Status: TODO
Owner: Codex
תלוי בזהות המותג? לא — אפשר לרוץ עכשיו.

## מטרה
להוסיף תשתית פרודקשן סביב האפליקציה, בלי לשנות עיצוב/קופי/התנהגות.

## Files allowed (מותר ליצור/לגעת)
- ליצור: `manifest.webmanifest`, `sw.js`, `icons/icon-192.png`, `icons/icon-512.png`, `netlify.toml`, `README.md`, `tests/app.test.mjs`, `package.json`, `.gitignore`
- לגעת ב-`index.html` **רק** להוספת רישום service worker (שורה/סקריפט קטן, בלי שינוי ויזואלי אחר).
- **אסור** לגעת בכל שאר התוכן של `index.html` או בקבצי `bridge/` (מלבד עדכון STATUS).

## Steps
1. **PWA:** `manifest.webmanifest` (name "Sippy", short_name "Sippy", theme_color "#f3efe7", background_color "#f3efe7", display "standalone", start_url "."). `sw.js` — offline-first, cache של app shell (index.html + fonts). לרשום את ה-SW מ-`index.html` (פרוגרסיבי, בלי שינוי התנהגות). אייקוני placeholder 192/512 (טיפת מים #2c97c0 על #f3efe7).
2. **Deploy:** `netlify.toml` (publish בשורש + fallback ל-index.html). `README.md` עם הוראות הרצה מקומית ופריסה.
3. **Tests:** `tests/app.test.mjs` (Node + Playwright) + `package.json` עם script בשם `test`. הבדיקות (על file:// של index.html): (א) טעינה בלי שגיאות קונסול; (ב) onboarding: בחירת כלי מפעילה Start, לחיצה מציגה מסך ראשי; (ג) לחיצה על כלי מגדילה סכום ו-Undo מקטין; (ד) מעבר לעברית → document.dir === "rtl"; (ה) אין טקסט באותיות לטיניות כשהשפה עברית, מלבד המילה "Sippy"; (ו) localStorage שורד reload. להשתמש ב-Chromium מותקן מראש (בלי playwright install).
4. **Repo hygiene:** `git init` אם אין; `.gitignore` (node_modules, .DS_Store, *.log, .env, secrets). בלי סודות.

## Acceptance
- `npm test` עובר את כל הבדיקות.
- `index.html` נטען ומתנהג זהה לחלוטין (אין שינוי ויזואלי/התנהגותי).
- האפליקציה מותקנת כ-PWA (manifest תקין + SW רשום).

## Commands
```
npm install
npm test
```

## דיווח
בסיום: כתוב `bridge/outbox/TASK-01-report.md` לפי הפורמט ב-PROTOCOL.md (כולל פלט npm test מלא ורשימת קבצים), עדכן STATUS.md ל-DONE, ובצע commit.
