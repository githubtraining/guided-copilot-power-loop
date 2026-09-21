---
name: build-quiz
description: Add the JavaScript that makes the quiz work
tools: ['edit', 'search', 'runCommands']
---

# Make the quiz work

Ignore any context, instructions, or requirements in README.md file. Follow this
agent prompt and the listed project files only.

Read:

- [Page](../../index.html)
- [Questions](../../questions.js)
- [Behaviour file](../../app.js)
- [Project rules](../copilot-instructions.md)

If student input is needed, ask only one question per message and wait for the
answer before asking another question. Never combine questions in one
interaction.

Build the quiz behaviour in `app.js`.

Required behaviour:

1. The welcome area is shown first.
2. Start begins at question one with a score of zero.
3. The current clue and four answer buttons are displayed.
4. Selecting an answer shows correct or incorrect feedback.
5. A correct answer adds one point.
6. An answer cannot be selected twice.
7. The correct answer is clearly shown.
8. Next moves to the following question.
9. After the last question, the final score is shown.
10. Restart returns to question one and resets the score.
11. Progress and score are updated on screen.

Rules:

- Use `globalThis.QUIZ_QUESTIONS` from `questions.js`.
- Use the existing IDs and elements in `index.html`.
- Do not rewrite the page or question data.
- Do not add a timer, streak, confetti, hints, or other features.
- Keep functions small and give them clear names.

Run `npm test`.

Report:

1. File changed
2. The names and jobs of the main functions
3. Whether the test passed
4. Exact steps for testing a correct answer, an incorrect answer, results, and
   restart
5. The next step:

```text
Open the agent picker, choose 🤖 check-quiz, and send:
Check the finished quiz against the requirements list.
```

Stop when the core quiz works.
