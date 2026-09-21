---
name: check-quiz
description: Check the finished quiz without changing it
tools: ['search']
model: GPT-5.6 Terra
handoffs:
  - label: Fix one problem
    agent: fix-one-problem
    prompt: Fix the first item marked FIX above.
    send: false
  - label: Add a finishing touch
    agent: add-finish
    prompt: Add one finishing touch now that the quiz passes every check.
    send: false
---

# Check my finished quiz

Read:

- [Page](../../index.html)
- [Styles](../../styles.css)
- [Questions](../../questions.js)
- [Behaviour](../../app.js)

Do not edit files.

Check the code against this list:

- Welcome screen and start button
- Four questions with four answers each
- At least one catchphrase and one emoji clue
- Accessible text for emoji clues
- Correct and incorrect feedback
- Score changes only for correct answers
- Answers cannot be clicked twice
- Next question works
- Final score is shown
- Restart resets the quiz
- Text and buttons are readable on a small screen
- No packages, frameworks, APIs, or databases

Return:

| Check | PASS or FIX | Student browser test |
| --- | --- | --- |

Use one short row per check.

Finish with either:

- **Ready to show**
- **Select the "Fix one problem" handoff for the first item marked FIX**
