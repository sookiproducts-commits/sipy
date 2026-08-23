# PROTOCOL — החוזה בין Claude, Codex, והסוכנים (עבודת צוות)

## כיוונים
- **inbox/** = Claude → Codex (משימות + תשובות `*-ANSWER.md` לחסמים).
- **outbox/** = Codex → Claude (דוחות `*-report.md` וחסמים `*-BLOCKED.md`).
- **STATUS.md** = פנקס מצב משותף.

## סטטוסים
`TODO` → `DOING` → `DONE` (Codex סיים) → `VERIFIED` (Claude אימת) · או חזרה ל-`TODO` עם הערות · `BLOCKED` (Codex נתקע — ממתין לתשובת Claude).

## ערוץ חסמים (Codex ← → Claude)
Codex נתקע → כותב `outbox/<task>-BLOCKED.md` (השגיאה המדויקת + מה צריך) ומסמן BLOCKED.
Claude (במשימה היומית או לפי דרישה) קורא, פותר, ועונה ב-`inbox/<task>-ANSWER.md`.
בריצה הבאה Codex קורא את ה-ANSWER וממשיך.

## פורמט דוח (Codex → outbox)
```
# <task-id> — Report
Status: DONE | BLOCKED
Files changed: <רשימה>
What I did / Blocker: <תקציר או השגיאה>
Test output: <פלט מלא>
```

## עבודת צוות — כדי שלא נדרוס אחד את השני
**בעלות על קבצים (רק הבעלים עורך):**
- **Claude:** מסמכים, ספֵקים, `bridge/inbox/`, ברנד בוק, הגדרות סוכנים, ביקורות (`outbox/*-review.md`), לוגים שהוא כותב.
- **Codex:** קוד — `index.html`, `tests/`, `manifest`, `sw.js`, קונפיג — ומבצע commit/push דרך ה-runner בלבד.
כללים: Claude **לא** עורך קוד ישירות (מבקש דרך משימת inbox); Codex **לא** עורך inbox/מסמכים (רק STATUS + outbox). git הוא מקור האמת; ה-runner מושך לפני וריצה ודוחף אחרי.
