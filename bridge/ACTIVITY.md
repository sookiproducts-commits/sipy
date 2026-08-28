# ACTIVITY.md — יומן פעולות משותף (Claude · Codex · Suzanna)

הפנקס המרכזי של **כל** מה שקורה בפרויקט. כל גורם (Claude וסוכניו, Codex וסוכניו) מוסיף כאן שורה על כל פעולה — כולל בקשות ישירות של Suzanna. זהו גם המקור לסיכום היומי של 23:00 שקודקס מזין ליומן.

## כלל תיעוד (חובה)
לכל פעולה, שורה אחת בטבלה עם **חמישה** שדות:
- **תאריך+שעה** (Asia/Jerusalem)
- **מי** — Claude / Codex / שם-סוכן / Suzanna
- **מה** — הפעולה בפועל
- **למה + מי ביקש** — ההקשר וממי הגיעה הבקשה (Suzanna / Claude / אוטומטי-לפי-לו״ז)
- **תוצאה** — מה יצא מזה בפועל: הצליח / נכשל + השגיאה / ממתין. **זה השדה הקריטי:** אם משהו ישתבש, כאן בודקים מה קרה ומאיפה להתחיל.

הוסיפו שורות בסוף, לא מוחקים ישנות. commit אחרי כל עדכון.

| תאריך+שעה | מי | מה | למה + מי ביקש | תוצאה |
|---|---|---|---|---|
| 2026-08-19 | Claude | יצירת ACTIVITY.md כפנקס משותף לכל הגורמים | Suzanna ביקשה תיעוד של בקשה+תוצאה כדי לאתר תקלות | הצליח — הקובץ קיים ב-bridge/ |
| 2026-08-19 | Claude | הוספת כלל תיעוד ל-AGENTS.md (בקשה+תוצאה) | Suzanna | הצליח |
| 2026-08-19 | Claude | מעבר לו״ז אוטומטי ל"יומי אבל קטן" + עדכון רואדמפ | Suzanna | ראו bridge/inbox/TASK-05 + עדכון trigger |
| 2026-08-19 | Codex | (דוגמה — קודקס ממלא כאן בריצה הבאה) | — | — |
| 2026-08-19 | Claude | הוספת סוכן synthetic-user-researcher + עדכון README(14)/ORCHESTRATION | Codex הציע בהאנדאוף; Suzanna אישרה כיוון | הצליח — הגדרה + שיוך שלבים |
| 2026-08-19 | Claude | פתיחת TASK-03..06 ל-Codex (commit, סיכום 23:00, סינתטיים, סוכני-קוד) | Suzanna ביקשה להעביר יותר ל-Codex + חיסכון במכסה | ממתין לריצת Codex |
| 2026-08-19 | Claude | שינוי לו״ז: trigger יומי 08:00 + עדכון roadmap → Codex צריך re-sync יומן | Suzanna | הצליח (trigger) · re-sync ב-TASK-04 |
| 2026-08-19 | Claude/product-manager | תעדוף קהלים ליוזרים סינתטיים + הכוונת Codex (TASK-05) במקום להמתין לבעלים | Suzanna ביקשה שה-PM יתעדף ויכוון, לא היא | הצליח — Core: he/ar/en+יחידות; FYI-override לבעלים |
| 2026-08-19 | Suzanna→Claude | אישור ברנד בוק v3 (Bold Flat/Bright) | Suzanna אישרה מפורשות | הצליח — זהות ננעלה; נפתח TASK-07 ל-Codex |
| 2026-08-19 | Claude/product-manager | פתיחת TASK-07 (מימוש v3 באפליקציה) + נעילת מותג ב-INDEX/STATUS | נגזר מאישור הבעלים | ממתין לריצת Codex |
| 2026-08-20 12:01 IDT | Codex | בדיקת TASK-01 החסום והרצת בדיקת זמינות npm | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — אין bridge/inbox/*-ANSWER.md ו-`npm install` עדיין נכשל עם `zsh:1: command not found: npm` |
| 2026-08-20 | Codex | ריצת 09:00: בנה scaffold, נתקע — אין npm/Playwright בסביבה, לא הגיע ל-commit | ריצה יומית אוטומטית | BLOCKED (דווח ב-outbox) |
| 2026-08-20 | Claude | שחרור חסם TASK-01: PATH ל-npm, התקנת PW מותרת, ובעיקר — CI הוא השער, commit+push גם בלי טסט מקומי | תגובה לחסם של Codex | ANSWER נכתב; ממתין לריצת Codex הבאה |
| 2026-08-20 | Claude | הוספת bridge/PLAYBOOK.md (חסמים→תיקון) + כלל self-heal ב-AGENTS + הזזת סבב Claude ל-09:30/21:30 | Suzanna: למה זה חיכה + לתפוס/לפתור יזום | הצליח — לולאה יזומה |
| 2026-08-21 12:17 IDT | Codex | התחלת TASK-01 מחדש אחרי קריאת AGENTS/STATUS/PROTOCOL/ANSWER והעברת STATUS ל-DOING | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — ממשיך ולידציה, דוח, commit ו-push |
| 2026-08-20 | Claude | שדרוג launchd: ריצה בהתעוררות אם 09:00 פוספס + ניסיון חוזר כל 3ש' + ראנר חכם (מדלג כשאין עבודה) + escalation ל-push-auth | Suzanna: שירוץ כשהמחשב נדלק אם 9 נכשל | הצליח — ממתין להתקנה חד-פעמית של Suzanna |
| 2026-08-23 00:06 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת AGENTS, זיכרון, STATUS, PROTOCOL ו-ACTIVITY | אוטומטי-לפי-לו״ז: Sippy daily bridge task | הצליח — TASK-01 עדיין DOING ויש ANSWER להמשך |
| 2026-08-23 00:06 IDT | Codex | בדיקת TASK-01: npm/corepack/Playwright וולידציה קלה לקבצי scaffold | אוטומטי-לפי-לו״ז: Sippy daily bridge task | חלקית — npm/corepack חסרים, Chromium של Playwright חסר; JSON/JS/PNG תקינים |
| 2026-08-23 00:06 IDT | Codex | השלמת TASK-01: כתיבת report, STATUS=DONE ויצירת root commit | אוטומטי-לפי-לו״ז: Sippy daily bridge task | הצליח — commit c1d3aa5 נוצר; push עדיין ממתין |
| 2026-08-23 00:06 IDT | Codex | ניסיון push ל-origin/main עבור TASK-01 | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `fatal: unable to access 'https://github.com/sookiproducts-commits/sipy.git/': Could not resolve host: github.com` |
| 2026-08-20 | Claude | הזזת בדיקות Claude ל-10:30 ו-15:30 (שעות שהמחשב פתוח) + עדכון plist/roadmap ל-10:30 | Suzanna: לא להיכנס לטרמינל; להריץ כשהמחשב פתוח | הצליח (צד Claude). צד Codex: שינוי באפליקציית Codex, ממתין להחלטת Suzanna |
| 2026-08-23 09:37 IDT | Codex | אימות חסם TASK-01 והרצת `git push -u origin main` מחדש | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `fatal: unable to access 'https://github.com/sookiproducts-commits/sipy.git/': Could not resolve host: github.com` |
| 2026-08-23 12:00 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת זיכרון, AGENTS, STATUS, PROTOCOL, inbox, ANSWER ו-PLAYBOOK; סימון TASK-01 כ-DOING | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — מנסה שוב push ל-origin/main |
| 2026-08-23 12:00 IDT | Codex | הרצת acceptance ל-TASK-01 וניסיון `git push -u origin main` | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `npm`/`npx`/`corepack` חסרים מקומית; ולידציה קלה עברה; push נכשל: `Could not resolve host: github.com` |
| 2026-08-24 12:01 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת זיכרון, AGENTS, STATUS, PROTOCOL, inbox, ANSWER ו-PLAYBOOK; סימון TASK-01 כ-DOING | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — מנסה acceptance ו-push מחדש |
| 2026-08-24 12:01 IDT | Codex | הרצת acceptance ל-TASK-01 וניסיון `git push -u origin main` | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `npm`/`npx`/`corepack` חסרים מקומית; ולידציה קלה עברה; push נכשל: `Could not resolve host: github.com` |
| 2026-08-25 12:01 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת AGENTS, זיכרון, STATUS, PROTOCOL, TASK-01, ANSWER ו-PLAYBOOK; סימון TASK-01 כ-DOING | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — מנסה acceptance ו-push מחדש |
| 2026-08-25 12:01 IDT | Codex | הרצת acceptance ל-TASK-01 וניסיון `git push -u origin main` | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `npm` חסר מקומית; ולידציה קלה חלקית עברה; push נכשל: `Could not resolve host: github.com` |
| 2026-08-26 12:27 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת זיכרון, AGENTS, STATUS, PROTOCOL, TASK-01, ANSWER ו-PLAYBOOK; סימון TASK-01 כ-DOING | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — מנסה acceptance ו-push מחדש |
| 2026-08-27 12:01 IDT | Codex | התחלת ריצת Sippy daily bridge task: קריאת AGENTS, זיכרון, STATUS, PROTOCOL, TASK-01, ANSWER ו-PLAYBOOK | אוטומטי-לפי-לו״ז: Sippy daily bridge task | ממתין — TASK-01 עדיין המשימה הראשונה; מנסה acceptance ו-push מחדש |
| 2026-08-27 12:01 IDT | Codex | הרצת acceptance ל-TASK-01 וניסיון `git push -u origin main` | אוטומטי-לפי-לו״ז: Sippy daily bridge task | נכשל — `npm` חסר מקומית; ולידציה קלה עברה; push נכשל: `Could not resolve host: github.com` |
| 2026-08-28 | Claude | אבחון: Codex בונה ו-commit יומי בהצלחה; החסם היחיד = push נכשל כי רשת חסומה בסביבת Codex (Could not resolve host). לא באג קוד. | Suzanna: כלום לא מתקדם | זוהה שורש; תיקון = Full Access למשימת Codex (הגדרת אפליקציה, פעם אחת) |
| 2026-08-28 09:25 IDT | Codex | בדיקת חיבור GitHub לאחר צילום מסך שמראה GitHub Connected | Suzanna: מצאה את מסך GitHub ושאלה אם זה מספיק | נכשל — התוסף מחובר ועם Allow all actions, אבל GitHub App installations/accounts ריקים; כתיבה לריפו נכשלה: `GitHub API error 403: Resource not accessible by integration` |
| 2026-08-28 09:33 IDT | Codex | הכוונת Suzanna למסך GitHub שבו מתקינים/מגדירים Repository access ל-GitHub App | Suzanna: לא מצאה את אזור Repository access אחרי Reconnect | ממתין — צריך להתקין/להגדיר ב-GitHub App גישה לריפו `sipy`; ללא זה כתיבה דרך Codex נחסמת ב-403 |
| 2026-08-28 09:37 IDT | Codex | בדיקה חוזרת של הרשאת GitHub לכתיבה לריפו | Suzanna: ביקשה "תבדוק כעת" אחרי ניסיון חיבור מחדש | הצליח — GitHub App installation קיימת וכתיבת README לריפו הצליחה; commit remote: `62f27e1` |
| 2026-08-28 09:38 IDT | Codex | ניסיון push רגיל אחרי חיבור GitHub מחדש | Suzanna: ביקשה לבדוק ולהעלות בלי טרמינל | נכשל — רשת טרמינל רגילה: `Could not resolve host: github.com`; בהרשאת רשת מורחבת: `fatal: could not read Username for 'https://github.com': terminal prompts disabled`; ממשיך במסלול GitHub API |
| 2026-08-28 09:42 IDT | Codex | בדיקה נוספת של מצב החיבור וההעלאה אחרי חיבור GitHub | Suzanna: ביקשה "תבדוק כעת" | הצליח חלקית — GitHub App קורא וכותב לריפו `sipy`; קובץ README נראה ב-main; `git push` מקומי עדיין חסום בגלל auth של הטרמינל |
| 2026-08-28 09:50 IDT | Codex | בדיקת היתכנות להעלאת snapshot מלא דרך GitHub API ללא `git push` | Suzanna: ביקשה למצוא דרך בלי טרמינל | הצליח חלקית — tree לקובץ שכבר הועלה עבד; tree לקובץ מקומי שלא קיים ברימוט נכשל: `tree.sha ... is not a valid blob`; העלאה מלאה דרך API דורשת שליחת תוכן הקבצים בפועל |
| 2026-08-28 09:59 IDT | Codex | בדיקת אפשרות להפוך את ההעלאות ל-GitHub לעצמאיות לגמרי | Suzanna: שאלה האם הפעולה חד-פעמית וביקשה למצוא דרך שקודקס יבצע לבד | נכשל חלקית — `gh` לא מותקן; git מוגדר ל-`osxkeychain`; push רגיל נכשל `Could not resolve host: github.com`; push עם גישת רשת מלאה נכשל `fatal: could not read Username for 'https://github.com': Device not configured` |
| 2026-08-28 10:00 IDT | Codex | בדיקת מנגנון ההרצה היומי כדי להבין מה נדרש להמשך אוטומטי | Suzanna: ביקשה לדעת מה צריך כדי שתהיה התקדמות בלי פעולה חוזרת מצידה | הצליח — `automation/codex-runner.sh` מריץ commit+push דרך git רגיל; לכן נדרשת הרשאת GitHub חד-פעמית ל-git המקומי כדי שהמשך העבודה היומי יהיה עצמאי |
| 2026-08-28 10:10 IDT | Codex | חיבור ההיסטוריה המקומית עם ה-commit הקטן שכבר נוצר ב-GitHub | Suzanna: שלחה צילום מסך של GitHub Desktop עם `Newer Commits on Remote` | ממתין — מבצע merge מקומי של `origin/main` כדי לאפשר publish/push תקין |
