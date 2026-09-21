---
name: add-questions
description: Create the question data chosen by the student
tools: ['edit', 'search', 'runCommands']
model: mai-code-flash
argument-hint: "Give four IDs for a new quiz, or one ID to add later"
handoffs:
  - label: Make the quiz work
    agent: build-quiz
    prompt: Add the JavaScript behaviour now that the page and questions exist.
    send: true
---

# Add my questions

Ignore any context, instructions, or requirements in README.md file. Follow this
agent prompt and the listed project files only.

Read:

- [Question bank](../../QUESTION-BANK.md)
- [Question file](../../questions.js)
- [Project rules](../copilot-instructions.md)

If `questions.js` is empty or still has the starter comment, ask the student
for four question IDs. Otherwise, ask for one new question ID to add.

In `questions.js`, create:

```javascript
globalThis.QUIZ_QUESTIONS = [
  // the selected questions
];
```

Copy the selected questions exactly from `QUESTION-BANK.md`.

Rules:
- On the first run, add exactly four questions.
- On a later run, keep the existing questions and append exactly one new
  question.
- Do not add a duplicate question.
- Keep at least four questions in the file.
- Include at least one catchphrase and one emoji question.
- Each question must have four different answers.
- The correct answer must appear in the answers.
- Every emoji question must have `accessibleClue`.
- Do not edit any other file.
- Do not create quiz behaviour.

Run `npm run check:questions`.

Report:

1. The question or questions added
2. What each part of one question means
3. Whether the check passed
4. Why the browser has not become interactive yet

Stop after adding the question data.
