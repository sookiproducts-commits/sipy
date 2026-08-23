# Sippy × Codex — סקירה (עודכן)

**אין יותר קופי־פייסט.** הזרימה עברה ל-bridge + runner:

- **משימות:** אני כותבת ספֵק ל-`bridge/inbox/TASK-*.md`.
- **Codex:** קורא את `AGENTS.md` (הנחיות קבועות), לוקח את המשימה הבאה, עובד **רק בתוך תיקיית הפרויקט**, מריץ בדיקות, כותב `bridge/outbox/<id>-report.md`, מעדכן `bridge/STATUS.md`. לא נוגע ב-git/רשת.
- **תזמון + git/GitHub:** `automation/codex-runner.sh` (רץ על המחשב שלך, מתוזמן ב-launchd) מושך, מריץ את Codex, ודוחף ל-GitHub.
- **חסמים:** Codex נתקע → כותב `bridge/outbox/<id>-BLOCKED.md`. אני עונה ב-`bridge/inbox/<id>-ANSWER.md`. Codex ממשיך בריצה הבאה.
- **אימות:** GitHub Actions (בכל push) + המשימה היומית שלי.

פרטים מלאים: `AGENTS.md`, `bridge/PROTOCOL.md`, `automation/CODEX-AUTORUN.md`.
