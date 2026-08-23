# הרצה אוטומטית של Codex — עם התעוררות + ניסיון חוזר

המנגנון: launchd (מתזמן macOS). מריץ את `codex-runner.sh` שמפעיל את Codex על המשימה הבאה ודוחף ל-GitHub.

## מה זה מכסה (התשובה לשאלה "שירוץ כשהמחשב נדלק אם 9 לא הצליח")
- **המחשב היה ישן ב-09:00** → launchd מריץ את המשימה **אוטומטית בהתעוררות הבאה** (התנהגות מובנית של StartCalendarInterval).
- **רץ ב-09:00 אבל נכשל** → יש ניסיון חוזר כל 3 שעות (StartInterval), וגם ריצה בכל login/טעינה.
- **הראנר חכם:** אם אין משימה פתוחה (הכול VERIFIED/DONE) הוא מדלג על Codex — לא שורף מכסה. אז ריצות תכופות בטוחות.
- **push:** הראנר עושה commit+push. אם אין הרשאת GitHub, הוא כותב `bridge/outbox/PUSH-AUTH-BLOCKED.md` — וזה יגיע אלייך.

## התקנה/עדכון — שורה אחת בטרמינל (חד-פעמי)
```bash
cd ~/Claude/Projects/sipy/automation && chmod +x codex-runner.sh && cp com.sippy.codex.plist ~/Library/LaunchAgents/ && launchctl unload ~/Library/LaunchAgents/com.sippy.codex.plist 2>/dev/null; launchctl load ~/Library/LaunchAgents/com.sippy.codex.plist && echo "INSTALLED ✓"
```

## בדיקות
- להריץ עכשיו: `launchctl start com.sippy.codex`
- לראות מה קרה: `cat ~/Claude/Projects/sipy/automation/codex-run.log`
- לעצור: `launchctl unload ~/Library/LaunchAgents/com.sippy.codex.plist`

## הערה
launchd רץ רק כשהמחשב ער. אם הוא ישן — הריצה תתבצע בהתעוררות. זה מכסה בדיוק את התרחיש ששאלת עליו, בלי צורך להעיר את המחשב יזום.
