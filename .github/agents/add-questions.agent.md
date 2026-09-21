---
name: add-questions
description: Create the question data chosen by the student
tools: ['edit', 'search', 'runCommands']
model: GPT-5.6 Terra
argument-hint: "Give four IDs from QUESTION-BANK.md"
handoffs:
  - label: Make the quiz work
    agent: build-quiz
    prompt: Add the JavaScript behaviour now that the page and questions exist.
    send: false
---

# Add my questions

Read:

- [Question bank](../../QUESTION-BANK.md)
- [Question file](../../questions.js)
- [Project rules](../copilot-instructions.md)

Ask the student for four question IDs if they have not provided them.

In `questions.js`, create:

```javascript
globalThis.QUIZ_QUESTIONS = [
  // the four selected questions
];
```

Copy the selected questions exactly from `QUESTION-BANK.md`.

Rules:

- Add exactly four questions.
- Include at least one catchphrase and one emoji question.
- Each question must have four different answers.
- The correct answer must appear in the answers.
- Every emoji question must have `accessibleClue`.
- Do not edit any other file.
- Do not create quiz behaviour.

Run `npm run check:questions`.

Report:

1. The four questions added
2. What each part of one question means
3. Whether the check passed
4. Why the browser has not become interactive yet

Stop after adding the question data.
