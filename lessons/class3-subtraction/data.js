// ThinkCraft · Class 3 Maths · Subtraction ("Give and Take")
// Aligned to CBSE / NCERT Class 3 (Maths Mela): subtraction of numbers up to 999,
// with and without regrouping, "how many more", checking with addition, word problems.
window.LESSON = {
  id: "M3-SUB-01",
  grade: "Class 3",
  subject: "Maths",
  title: "Give and Take: Subtraction",
  steps: [
    {
      title: "Take Away!",
      emoji: "🟠",
      visual: { kind: "objects", emoji: "🟠", total: 9, take: 3, label: "9 laddoos · 3 eaten" },
      narration: { text: "Hi, I'm MeBot! Imagine Amma makes 9 laddoos for Diwali. You and your friends eat 3 of them. How many are left on the plate? When we take some away and find what is left, that is called subtraction." },
      quiz: {
        question: "9 laddoos, 3 eaten. How many are left?",
        options: ["5", "6", "7", "12"], correct: 1,
        ask: { text: "Quiz time! 9 laddoos, and 3 are eaten. How many are left? 5, 6, 7, or 12?" },
        right: { text: "Yes! You got it. 9 take away 3 leaves 6. You just did subtraction." },
        wrong: { text: "Not quite. Count the laddoos still on the plate. There are 6. 9 take away 3 is 6." }
      }
    },
    {
      title: "Meet the Minus Sign",
      emoji: "➖",
      visual: { kind: "eq", parts: ["9", "−", "3", "=", "6"], tags: ["", "minus", "", "", "difference"] },
      narration: { text: "In maths, we write it like this. 9 minus 3 equals 6. The little line is the minus sign. And the answer, 6, has a special name. It is called the difference." },
      quiz: {
        question: "In 9 − 3 = 6, what is 6 called?",
        options: ["The sum", "The difference", "The total", "The plus"], correct: 1,
        ask: { text: "Quick one! In 9 minus 3 equals 6, what is 6 called? The sum, the difference, the total, or the plus?" },
        right: { text: "Boom! The difference. The answer to a subtraction is always the difference." },
        wrong: { text: "Almost! It's the difference. Sum is for adding. Difference is for subtracting." }
      }
    },
    {
      title: "Hop Back on the Number Line",
      emoji: "🐸",
      visual: { kind: "line", from: 10, to: 20, start: 15, hops: 4 },
      narration: { text: "Subtraction is like walking backwards. Start at 15 on the number line. Now take 4 hops back. 14, 13, 12, 11. You land on 11. So 15 minus 4 is 11." },
      quiz: {
        question: "Start at 20. Hop back 5. Where do you land?",
        options: ["25", "16", "15", "14"], correct: 2,
        ask: { text: "Your turn, little frog! Start at 20 and hop back 5. Where do you land? 25, 16, 15, or 14?" },
        right: { text: "Yes! 19, 18, 17, 16, 15. You landed on 15. 20 minus 5 is 15." },
        wrong: { text: "Good try! Count the hops: 19, 18, 17, 16, 15. You land on 15. Going back means the number gets smaller." }
      }
    },
    {
      title: "How Many More?",
      emoji: "🔵",
      visual: { kind: "compare", a: { name: "Riya", n: 12 }, b: { name: "Arjun", n: 7 }, emoji: "🔵" },
      narration: { text: "Subtraction also tells us how many more. Riya has 12 marbles. Arjun has 7. Match them up, one by one. Riya has 5 marbles left over. So Riya has 5 more. 12 minus 7 is 5." },
      quiz: {
        question: "Team A scored 48 runs. Team B scored 35. How many more runs did Team A score?",
        options: ["83", "13", "23", "12"], correct: 1,
        ask: { text: "Cricket time! Team A scored 48 runs. Team B scored 35. How many more runs did Team A score? 83, 13, 23, or 12?" },
        right: { text: "Six! Out of the park! 48 minus 35 is 13. Team A scored 13 more runs." },
        wrong: { text: "Not quite. How many more means we subtract. 48 minus 35 is 13. And 83? That's what you get if you add by mistake." }
      }
    },
    {
      title: "Ones First, Then Tens",
      emoji: "🧱",
      visual: { kind: "cols", a: 47, b: 23 },
      narration: { text: "Bigger numbers? Easy. Stand them up in columns, tens and ones. Always start from the ones. 7 minus 3 is 4. Then the tens. 4 minus 2 is 2. So 47 minus 23 is 24." },
      quiz: {
        question: "68 − 25 = ?",
        options: ["43", "33", "93", "42"], correct: 0,
        ask: { text: "Quiz time! What is 68 minus 25? 43, 33, 93, or 42? Ones first!" },
        right: { text: "Yes! 8 minus 5 is 3. 6 minus 2 is 4. That's 43." },
        wrong: { text: "Not quite. Ones first: 8 minus 5 is 3. Then tens: 6 minus 2 is 4. The answer is 43." }
      }
    },
    {
      title: "Borrow a Ten",
      emoji: "🔄",
      visual: { kind: "cols", a: 52, b: 27 },
      narration: { text: "Now try 52 minus 27. Ones first. 2 minus 7? We can't take 7 from 2! So the ones borrow from the tens. One ten breaks into 10 ones. Now we have 12 ones and only 4 tens. 12 minus 7 is 5. 4 minus 2 is 2. The answer is 25." },
      quiz: {
        question: "The top ones digit is too small. What do we do?",
        options: ["Give up", "Borrow 1 ten = 10 ones", "Swap the digits", "Add instead"], correct: 1,
        ask: { text: "Quick one! When the top ones digit is too small, what do we do? Give up, borrow 1 ten, swap the digits, or add instead?" },
        right: { text: "Exactly! Borrow 1 ten, and it becomes 10 ones. Maths friends share." },
        wrong: { text: "Not quite. Never swap the digits! We borrow 1 ten from the tens place, and it becomes 10 ones." }
      }
    },
    {
      title: "Your Turn: Borrow!",
      emoji: "✏️",
      visual: { kind: "cols", a: 63, b: 28, hide: true },
      narration: { text: "Your turn to be the teacher. Look at 63 minus 28. Check the ones. Is 3 big enough to take away 8? If not, you know what to do." },
      quiz: {
        question: "63 − 28 = ?",
        options: ["45", "35", "25", "91"], correct: 1,
        ask: { text: "Quiz time! What is 63 minus 28? 45, 35, 25, or 91?" },
        right: { text: "Boom! 3 is too small, so borrow. 13 minus 8 is 5. 5 minus 2 is 3. That's 35!" },
        wrong: { text: "Careful! If you got 45, you swapped 3 and 8. Borrow instead: 13 minus 8 is 5, then 5 minus 2 is 3. The answer is 35." }
      }
    },
    {
      title: "Hundreds Too!",
      emoji: "💯",
      visual: { kind: "cols", a: 432, b: 158 },
      narration: { text: "Class 3 champions handle hundreds too. 432 minus 158. Ones: 2 minus 8? Borrow! 12 minus 8 is 4. Tens: now only 2 tens. 2 minus 5? Borrow from the hundreds! 12 minus 5 is 7. Hundreds: now only 3. 3 minus 1 is 2. The answer is 274." },
      quiz: null
    },
    {
      title: "Check With Addition",
      emoji: "✅",
      visual: { kind: "eq", parts: ["274", "+", "158", "=", "432"], tags: ["answer", "", "took away", "", "start ✓"] },
      narration: { text: "Here's a secret trick. To check a subtraction, add the answer back to the number you took away. 274 plus 158 is 432. That's where we started! So our answer is correct." },
      quiz: {
        question: "Ravi says 500 − 236 = 264. Which addition checks it?",
        options: ["264 + 236", "500 + 236", "264 + 500"], correct: 0,
        ask: { text: "Detective time! Ravi says 500 minus 236 is 264. Which addition checks it? 264 plus 236, 500 plus 236, or 264 plus 500?" },
        right: { text: "Yes! 264 plus 236 is 500. We got back to the start, so Ravi is right." },
        wrong: { text: "Not quite. Add the answer and the number taken away: 264 plus 236. That makes 500, so Ravi is right." }
      }
    },
    {
      title: "The Mela Challenge",
      emoji: "🎡",
      visual: { kind: "card", icon: "🎡", lines: ["You have ₹350 at the school mela.", "A toy train costs ₹125.", "How much money is left?"] },
      narration: { text: "Last one, champion! At the school mela, you have 350 rupees. You buy a toy train for 125 rupees. How much money is left?" },
      quiz: {
        question: "₹350 − ₹125 = ?",
        options: ["₹475", "₹235", "₹225", "₹215"], correct: 2,
        ask: { text: "Final question! 350 rupees minus 125 rupees. Is it 475, 235, 225, or 215?" },
        right: { text: "Yes! 225 rupees left. Check it: 225 plus 125 is 350. Enough for some jalebis too!" },
        wrong: { text: "So close! Ones: 0 minus 5, borrow, 10 minus 5 is 5. Tens: 4 minus 2 is 2. Hundreds: 3 minus 1 is 2. That's 225 rupees." }
      }
    },
    {
      title: "Lesson Complete",
      emoji: "🏆",
      visual: { kind: "card", icon: "🏆", lines: ["Take away", "Hop back", "Borrow a ten", "Check by adding"] },
      narration: { text: "Lesson complete! You can now take away, hop back, borrow a ten, and check your answer with addition. Next, you'll learn to estimate answers like a pro." },
      quiz: null
    }
  ]
};
