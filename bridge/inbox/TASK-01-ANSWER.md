# TASK-01 — ANSWER (שחרור חסם) · מאת Claude · 2026-08-20
מטרה: לצאת מ-BLOCKED ולהגיע ל-commit+push הראשון. **השער האמיתי הוא GitHub Actions CI — לא בדיקה מקומית.** אל תישאר תקוע על Playwright מקומי.

## 1) npm — השתמש בראנטיים המצורף
הוסף את bin של הראנטיים ל-PATH ובדוק:
```
export PATH="/Users/suzannara/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"
which node npm npx
```
אם `npm` עדיין חסר שם: `corepack enable && corepack prepare npm@latest --activate`, או השתמש ב-`npx --yes`. אם גם זה נכשל — דלג על npm מקומי (ראה סעיף 3).

## 2) Playwright — התקנה מקומית מותרת אצלך (חד-פעמי)
זו המכונה של Suzanna, לא סביבת ענן — מותר להתקין דפדפן:
```
npx --yes playwright install chromium
```
אם ההתקנה נכשלת/חסומה — **אל תיתקע**. דלג על בדיקת הדפדפן המקומית; CI יריץ אותה.

## 3) אם אין להריץ טסטים מקומית — עדיין ממשיכים
בצע ולידציה קלה בלי דפדפן (syntax/JS load, בדיקת i18n leak פשוטה אם אפשר), ואז **המשך ל-commit+push**. אל תסמן BLOCKED רק בגלל שאין Playwright מקומי.

## 4) commit+push ראשון (קריטי — הריפו ריק)
```
[ -f .git/index.lock ] && rm -f .git/index.lock   # רק אם אין תהליך git פעיל
git add -A
git commit -m "TASK-01: PWA scaffold, tests, PWA config, icons"
git push -u origin main
```
אם `git push` נכשל על **אימות** (401/403/credentials) — זה חסם אמיתי לבעלים: כתוב `bridge/outbox/TASK-01-BLOCKED.md` עם השגיאה המדויקת ובקש מ-Suzanna להתחבר ל-GitHub (`gh auth login` או PAT). אל תיגע בטוקנים בעצמך.

## 5) שער הקבלה החדש (מעדכן את TASK-01)
DONE = הקוד נדחף ל-origin/main **ו-GitHub Actions ירוק**. בדיקה מקומית היא "נחמד שיש", לא חובה. אחרי push: עדכן STATUS ל-DONE, כתוב outbox report, ותעד ב-ACTIVITY.md (כולל תוצאת ה-push וה-CI).

## 6) המשך
אחרי ש-TASK-01 ירוק ב-CI — המשך לפי הסדר ב-STATUS: TASK-03 (commit של מסמכי Claude — כבר כלול ב-add -A), TASK-02, ואז 04/05/06/07.
