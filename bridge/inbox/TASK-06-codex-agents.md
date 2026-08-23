# TASK-06 — צור וְנַהֵל סוכני-קוד משלך (codex-agents/)
סטטוס: TODO · בעלים: Codex

## מטרה
להוריד עומס מ-Claude: אתה מייצר סוכנים לתחומי הקוד ומריץ אותם בעצמך.

## פעולה
צור הגדרות ב-`codex-agents/` (בבעלותך) לפחות עבור:
- `qa-runner.md` — מריץ Playwright + מוודא CI ירוק לפני DONE.
- `synthetic-exec.md` — מריץ תרחישי synthetic-user מול build כשיש URL/preview (מזין את הדוחות של synthetic-user-researcher).
הוסף לפי שיקולך: `perf-a11y.md`, `i18n-linter.md`.

## כללים
כל סוכן: פועל רק בתיקייה, לא נוגע בסודות, מתעד ב-ACTIVITY.md, מדווח ב-outbox. עדכן `codex-agents/README.md` עם הרשימה. אל תיגע ב-`sippy-agents/` (בעלות Claude).

## Definition of Done
לפחות qa-runner + synthetic-exec מוגדרים ורשומים; commit+push. תעד ב-ACTIVITY.md.
