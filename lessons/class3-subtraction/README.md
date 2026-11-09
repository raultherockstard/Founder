# ThinkCraft · Class 3 Maths · Subtraction ("Give and Take")

A MeBot listen-mode micro-lesson aligned to the CBSE / NCERT Class 3 textbook *Maths Mela*
("Give and Take"): subtraction of numbers up to 999, with and without regrouping.

| # | Step | Idea | Quiz answer |
|---|------|------|-------------|
| 1 | Take Away! | Subtraction means taking away (9 laddoos, 3 eaten) | 6 |
| 2 | Meet the Minus Sign | The − sign; the answer is called the *difference* | The difference |
| 3 | Hop Back on the Number Line | Counting back: 15 − 4 = 11 | 20 − 5 = 15 |
| 4 | How Many More? | Comparing: 12 − 7 = 5 | 48 − 35 = 13 |
| 5 | Ones First, Then Tens | 47 − 23 = 24 (no regrouping) | 68 − 25 = 43 |
| 6 | Borrow a Ten | 52 − 27 = 25 (regrouping) | Borrow 1 ten = 10 ones |
| 7 | Your Turn: Borrow! | Try one yourself | 63 − 28 = 35 |
| 8 | Hundreds Too! | 432 − 158 = 274 (two borrows) | — |
| 9 | Check With Addition | 274 + 158 = 432 | 264 + 236 checks 500 − 236 |
| 10 | The Mela Challenge | Word problem: ₹350 − ₹125 | ₹225 |
| 11 | Lesson Complete | Recap; next lesson is estimation | — |

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. Use `?step=6` to jump to a step.

## Check the maths

```bash
node -e 'global.window={};require("./data.js");window.LESSON.steps.forEach(s=>s.quiz&&console.log(s.title,"->",s.quiz.options[s.quiz.correct]))'
```

The column visual also recomputes every subtraction and logs a console error if a worked answer is wrong.
