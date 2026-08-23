# TASK-02 — GitHub Actions CI (אימות אוטומטי, עצמאי משינה)
Status: TODO
Owner: Codex
תלוי ב: TASK-01

## מטרה
להוסיף GitHub Actions שמריץ את הבדיקות בכל push — אימות בענן של GitHub, ללא תלות במחשב.
(הערה: הרֵיפו כבר קיים — github.com/sookiproducts-commits/sipy — ו-git/push מטופלים ע"י ה-runner. אתה רק יוצר את קובץ ה-CI בתוך התיקייה.)

## Files allowed
- ליצור בלבד: `.github/workflows/ci.yml`. אסור לגעת בכל דבר אחר (מלבד STATUS).

## Steps
1. צור `.github/workflows/ci.yml` עם התוכן:
   ```yaml
   name: CI
   on: [push, pull_request]
   jobs:
     test:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci || npm install
         - run: npx playwright install --with-deps chromium
         - run: npm test
   ```

## Acceptance
- הקובץ `.github/workflows/ci.yml` קיים ותקין (YAML).
- (לאחר ש-ה-runner ידחוף) ריצת ה-Action הראשונה מתחילה על GitHub.

## דיווח
כתוב `bridge/outbox/TASK-02-report.md`, עדכן STATUS.md ל-DONE. אל תריץ git — ה-runner ידחוף.
