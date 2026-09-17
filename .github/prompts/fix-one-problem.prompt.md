---
name: fix-one-problem
description: Fix one problem in the quiz the student built
agent: agent
model: GPT-5.6 Terra
argument-hint: "Describe what you expected and what actually happened"
---

# Fix one problem

Read:

- [Page](../../index.html)
- [Styles](../../styles.css)
- [Questions](../../questions.js)
- [Behaviour](../../app.js)
- [Project rules](../copilot-instructions.md)

The student expected:

${input:expected:What should have happened?}

What actually happened:

${input:actual:What did you see instead?}

Follow these steps:

1. Explain the most likely cause in one or two short sentences.
2. Name the file you expect to change.
3. Fix only this problem.
4. Do not add missing future steps or unrelated features.
5. Do not rewrite entire files.
6. Run `npm test` if question data or quiz behaviour changed. Otherwise run
   `npm run check`.

Report:

- Cause
- File changed
- Fix made
- Which check was run and whether it passed
- Exact browser steps to confirm the fix

Stop after fixing this one problem.
