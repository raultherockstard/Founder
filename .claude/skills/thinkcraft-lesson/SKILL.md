---
name: thinkcraft-lesson
description: Build a ThinkCraft MeBot "listen mode" lesson (any grade, any subject) in Raul's lesson voice and format, and run it locally. Use when asked to make a ThinkCraft lesson, a MeBot lesson, or a CBSE/NCERT-aligned micro-lesson.
---

# ThinkCraft MeBot lesson

The reference build is `lessons/class3-subtraction/` (Class 3 Maths, subtraction). Copy it and change
only `data.js` unless the lesson needs a new visual kind. It reuses the Lesson 1 "MeBot Listen Mode" player.

## Format (one idea per step)

- 8–12 steps and about 5 minutes. Each step has `title`, `emoji`, `visual`, `narration.text`, and an optional `quiz`.
- Open with a story: "Hi, I'm MeBot! Imagine…". Use everyday Indian life such as laddoos, cricket, the mela,
  rupees, Amma or Diwali.
- Teach, quiz, then reflect. The second-to-last step is a word problem. The last step is
  "Lesson complete! You can now … Next, you'll …".
- Quiz options are short and include the common mistake as a distractor (for example 45 for 63 − 28, which is
  what a child gets by swapping digits). The `wrong` reply names that mistake and shows the right method.

## Voice (how MeBot talks)

- Short, spoken sentences that a Class 3 child can follow by ear. Write numbers as digits and say "minus"
  and "plus" in words.
- Quiz openers: "Quiz time!", "Quick one!", "Your turn!", "Detective time!", "Final question!". The `ask`
  text reads every option aloud, ending with "…, or …?".
- Right replies: "Yes! You got it.", "Boom!", "Exactly!", then one line on why.
- Wrong replies are kind: "Not quite.", "Almost!", "Good try!", "So close!", then the method, step by step.
- Never shame a wrong answer. Each right answer gives 10 Sparks.

## Curriculum

- Align to the NCERT textbook for that grade (Class 3 Maths: *Maths Mela*) and to the CBSE learning outcomes.
  Stay inside the grade's number range (Class 3 goes up to 999).
- Check every answer with a script before shipping (see the `node -e` check in the subtraction lesson's README).

## Visual kinds (`index.html` → `V`)

`objects` (items crossed out), `eq` (labelled equation), `line` (number-line hops), `compare` (match two
rows), `cols` (column subtraction with animated borrowing; `hide: true` keeps the answer for the quiz),
`card` (word problem or summary). Each visual animates in step with the narration.

## Run locally (do not deploy)

```bash
cd lessons/<lesson> && python3 -m http.server 8080
```

Open http://localhost:8080. Add `?step=N` to jump to a step. The voice uses the device's speech engine
(en-IN when available). Swap in Sarvam audio files later by adding `audio` fields, as Lesson 1 does.
