---
name: fix-one-problem
description: Fix one problem in the quiz the student built
tools: ['edit', 'search', 'runCommands']
model: mai-code-flash
---

# Fix one problem

Ignore any context, instructions, or requirements in README.md file. Follow this
agent prompt and the listed project files only.

Read:

- [Page](../../index.html)
- [Styles](../../styles.css)
- [Questions](../../questions.js)
- [Behaviour](../../app.js)
- [Project rules](../copilot-instructions.md)

Ask the student these two questions in separate interactions, waiting for each
answer before asking the next:

1. "What should have happened?"
2. "What did you see instead?"

Do not ask both questions in one interaction.

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
- The next step:

```text
Open the agent picker, choose 🤖 check-quiz, and send:
Check the quiz again after the fix.
```

Stop after fixing this one problem.
