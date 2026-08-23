# PLAYBOOK — חסמים ידועים → תיקון ידוע (לשני הצדדים)
מטרה: שרוב החסמים ייפתרו **לבד**, בלי לחכות לאף אחד. Codex: קרא לפני שאתה כותב BLOCKED — אם החסם כאן, תקן והמשך במקום לעצור. Claude (בסבב): אם דוח BLOCKED תואם פריט כאן — כתוב ANSMER מיד; רק רשימת ההסלמה עוברת ל-Suzanna.

## תקן לבד (אל תיתקע, אל תפנה ל-Suzanna)
1. **`npm: command not found`** → `export PATH="/Users/suzannara/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH"`; אם עדיין חסר: `corepack enable && corepack prepare npm@latest --activate` או `npx --yes`. אם אין בכלל — דלג על npm, CI יבדוק.
2. **דפדפן Playwright חסר** (`Executable doesn't exist`) → `npx --yes playwright install chromium`. אם נכשל — דלג על בדיקה מקומית; **CI הוא השער**.
3. **`.git/index.lock` תקוע** (ואין תהליך git רץ) → `rm -f .git/index.lock` ואז המשך.
4. **`main does not have any commits yet` / צריך push** → `git add -A && git commit -m "<msg>" && git push -u origin main`.
5. **CI אדום** → פתח את לוג ה-Actions, תקן את הסיבה, דחוף שוב. אל תעצור על אדום — תקן.
6. **בדיקה מקומית לא רצה מסביבה** → ולידציה קלה בלי דפדפן + push; CI מאמת.

## הסלמה ל-Suzanna בלבד (אלה כן מחכים לה — קצר וברור)
- **אימות GitHub נכשל** ב-push (401/403/credentials) → צריך `gh auth login` או PAT. אל תיגע בטוקנים.
- כל דבר **כספי / פרסום פומבי / תמחור / מיצוב / בלתי-הפיך**.
- החלטת מוצר גדולה שאין לה ברירת מחדל סבירה (נדיר — בד"כ ה-PM מכריע).
