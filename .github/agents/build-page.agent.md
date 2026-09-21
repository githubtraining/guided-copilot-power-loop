---
name: build-page
description: Build the quiz screen without adding quiz behaviour
tools: ['edit', 'search', 'runCommands']
model: GPT-5.6 Terra
argument-hint: "Give your approved quiz name and two colours"
handoffs:
  - label: Add the questions
    agent: add-questions
    prompt: Add the four selected questions now that the page is built.
    send: false
---

# Build the page

Read:

- [Page](../../index.html)
- [Styles](../../styles.css)
- [Project rules](../copilot-instructions.md)

Ask the student for their approved quiz name and two colours if they have not
provided them.

Build the visible quiz page in `index.html` and `styles.css`.

The page must include:

- The quiz name
- A short welcome message
- A start button
- An area for question progress and score
- An area for a clue
- An empty area for four answer buttons
- An area for correct or incorrect feedback
- A next button
- A results area with final score
- A restart button

Rules:

- Do not add quiz questions.
- Do not add JavaScript behaviour.
- Do not edit `app.js` or `questions.js`.
- Use large readable text and buttons.
- Make the page work on a phone-sized screen.
- Hide the quiz and results areas when the page first loads.

Run `npm run check`.

Report:

1. Files changed
2. What was built
3. One HTML element and one CSS rule for the student to inspect
4. Whether the check passed
5. What the student should see after refreshing the browser

Stop after building the page.
