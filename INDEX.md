# Sippy — מפת מסמכים (מקור אמת אחד)

עודכן: 17.8.2026 · Repo: github.com/sookiproducts-commits/sipy (יעד: ציבורי)

## מקור אמת לפי תחום
| תחום | הקובץ | סטטוס |
|------|-------|-------|
| קוד / אפליקציה | `index.html` (+ בהמשך manifest/sw/tests) — בבעלות Codex דרך git | CURRENT (לפני רידיזיין לפי רפרנסים) |
| ממשל סוכנים | `sippy-agent-system.html` | CURRENT |
| הגדרת כל סוכן | `agents/*.md` (כולל product-manager) | CURRENT |
| סקילים | `brand-review.skill`, `ux-audit.skill`, `product-management.skill` | CURRENT |
| עבודה מול Codex | `AGENTS.md` + `bridge/` + `automation/` + `CODEX.md` | CURRENT |
| זהות / מותג | `sippy-brandbook.html` | CURRENT — **מאושר 19.8** (v3 Bold Flat/Bright) |
| מודבורד ישן | `sippy-moodboard.html` | SUPERSEDED ע"י הברנד בוק |
| תוכנית / פריסינג | `sipy-plan.md` | ברובו CURRENT · הערה: המחיר עודכן ל-**חינם עכשיו → 5$ בהמשך** (במקום 9.90) |

## תיקיות תפעול
- `bridge/` — inbox (משימות), outbox (דוחות/חסמים), STATUS, PROTOCOL.
- `automation/` — codex-runner.sh, plist, הוראות.
- `reports/ , queues/ , tasks-for-you/ , decisions/ , logs/` — ייווצרו ע"י המשימה היומית.

## כללי צוות (מניעת דריסה)
Claude בעלים של מסמכים/inbox/ביקורות; Codex בעלים של הקוד (דרך git). אף אחד לא עורך קובץ של השני. פרטים ב-`bridge/PROTOCOL.md`.

## עדכון 19.8.2026 (Claude)
- `bridge/ACTIVITY.md` — **חדש**: פנקס פעולות משותף (בקשה + תוצאה) לכל הגורמים; מקור לסיכום 23:00.
- `sippy-agents/synthetic-user-researcher.md` — **חדש** (סוכן #14). `README.md`/`ORCHESTRATION.md` עודכנו.
- `codex-agents/` — **חדש**: סוכני-קוד בבעלות Codex (qa-runner, synthetic-exec…).
- קצב עבודה: **יומי אבל קטן** (trigger יומי 08:00 + תוכן א׳/ג׳/ה׳ + סיכום 23:00). `sippy-roadmap.html` עודכן.
- משימות פתוחות ל-Codex: TASK-03 (commit) · TASK-04 (סיכום 23:00) · TASK-05 (סינתטיים Core) · TASK-06 (סוכני-קוד).
