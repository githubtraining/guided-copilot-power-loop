---
name: check-quiz
description: Check the finished quiz without changing it
agent: ask
model: GPT-5.6 Terra
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
- **Run `/fix-one-problem` for the first item marked FIX**
