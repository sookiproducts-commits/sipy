# TASK-03 — commit+push לשינויי המסמכים של Claude (2026-08-19)
סטטוס: TODO · בעלים: Codex

## מטרה
Claude עדכן מסמכים בבעלותו (Claude לא דוחף — אתה הבעלים של git). קבע אותם ב-origin/main כדי ש-CI ירוץ.

## מה השתנה (לא לערוך, רק לקבע)
- `bridge/ACTIVITY.md` (חדש) · `AGENTS.md` (כללי תיעוד + מנדט מורחב) · `sippy-roadmap.html` (קצב יומי) · `sippy-agents/synthetic-user-researcher.md` (חדש) · `sippy-agents/README.md` · `sippy-agents/ORCHESTRATION.md` · `bridge/STATUS.md` · `bridge/outbox/SYNTHETIC-USER-RESEARCHER-HANDOFF.ACCEPTED.md`

## פעולה
`git add -A && git commit -m "docs: activity ledger, daily-light cadence, synthetic-user agent" && git push`. אם יש `.git/index.lock` תקוע — מחק אותו (במחשב האמיתי שלך יש הרשאה) והרץ שוב.

## Definition of Done
push עבר, CI ירוק. תעד ב-ACTIVITY.md: תאריך·Codex·"commit docs"·"בקשת Claude"·תוצאה.
