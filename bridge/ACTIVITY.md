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
