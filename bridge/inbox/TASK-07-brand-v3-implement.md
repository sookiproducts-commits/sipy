# TASK-07 — מימוש ברנד v3 (מאושר) באפליקציה
סטטוס: TODO · בעלים: Codex · תלוי: TASK-01 (תשתית)

## החלטה
Suzanna אישרה את `sippy-brandbook.html` (v3 "Bold Flat / Bright") ב-2026-08-19. זו כעת הזהות המחייבת. מקור אמת ויזואלי: `sippy-brandbook.html` — קרא אותו לפני מימוש.

## Design tokens (מדויק — הטמע כ-CSS variables)
--honey #EAF2E3 · --ink #17241F · --turq #35CFC9 · --turq-deep #12A49D · --coral #F25757 · --gold #F2CD60 · --moss #7DCE82 · --white #FFF
טיפוגרפיה: **Rubik** (כותרות/מספרים, משקל כבד) · **Heebo** (ממשק). טען משתי המשפחות; fallback מערכת.

## סגנון (מחייב)
Bold flat: קווי מתאר עבים בצבע דיו, **בלי גרדיאנטים, בלי צללים**, שטחי צבע מלאים, טקסט דיו על רקע בהיר. סימן הטיפה (טורקיז + waterline ב-turq-deep + קו דיו) ו-wordmark "sippy" באותיות קטנות. RTL תקין (he/ar) — אין היפוך של ה-wordmark/מספרים/הקסים.

## Files allowed
`index.html` (+ assets/icons אם צריך). אל תיגע ב-`sippy-agents/`, מסמכים, או `bridge/inbox/`.

## Acceptance criteria
1. כל הצבעים והפונטים מהטוקנים למעלה בפועל באפליקציה (לא ערכים ישנים).
2. אין גרדיאנט/צל בקוד. קווי מתאר עבים קיימים.
3. onboarding + מסך "היום" + undo עובדים כמקודם; אין דליפת אנגלית בעברית; אין שגיאות קונסול.
4. RTL: he/ac תקינים; wordmark/מספרים לא הפוכים.
5. Playwright ירוק + CI ירוק.

## Definition of Done
CI ירוק, מסכים תואמים לברנד בוק, screenshot ל-outbox. commit+push. תעד ב-ACTIVITY.md (כולל תוצאה).
