# Brand Battle facilitator guide

## Outcome

Students begin with a blank webpage and build the quiz interface, question
data, and JavaScript behaviour with Copilot. Nothing in the starter implements
the quiz for them.

- **Students:** 50
- **Age:** approximately 15
- **Experience:** no coding or Copilot experience required
- **Time:** 60 minutes, including setup and showcase
- **Environment:** GitHub Codespaces
- **Model:** GPT-5.6 Terra or an approved versatile replacement
- **Budget:** $1,500 organization cap; $30 user-level hard limit per student

## What exists at the start

- An HTML document containing only an empty `<main id="app">`
- An empty stylesheet
- An empty question file
- An empty JavaScript behaviour file
- A facilitator-checked question bank
- Six guided Copilot prompt files

The blank browser page is intentional.

## 60-minute run sheet

| Time | Student activity |
| --- | --- |
| 0–5 | Open Codespace, run the server, and confirm the page is blank |
| 5–10 | Facilitator demonstrates vague versus checkable prompts |
| 10–18 | Read and run `/plan-quiz`; refine and approve the plan |
| 18–28 | Read and run `/build-page`; inspect HTML and CSS |
| 28–36 | Read and run `/add-questions`; inspect the data |
| 36–50 | Read and run `/build-quiz`; test the complete flow |
| 50–55 | Run `/check-quiz` and `/fix-one-problem` if needed |
| 55–60 | Optional finishing touch, neighbour showcase, and reflection |

If the group needs more time, skip `/add-finish`. A working core quiz is the
goal.

## Facilitator demonstration

Compare:

```text
Build me a cool quiz.
```

with:

```text
Build only the welcome and quiz screen in index.html.
Include a start button, score area, clue area, four empty answer buttons,
feedback area, and next button. Do not add JavaScript yet. Tell me what to test.
```

Ask students which request is easier to check and why.

## Human checkpoints

Do not let students run every slash command without thinking. Pause after each:

1. **Plan:** change or approve one decision.
2. **Page:** point to one HTML element and one CSS rule.
3. **Questions:** explain `clue`, `answers`, and `correctAnswer`.
4. **Behaviour:** predict what clicking a button should do.
5. **Check:** personally test the result instead of trusting the report.

## Before the event

1. Create a fresh Codespace.
2. Confirm the server starts automatically and the first browser page is blank.
3. Confirm `npm run check` passes before students begin.
4. Confirm all prompt files appear as slash commands.
5. Complete the full sequence with the approved versatile model.
6. Confirm the completed result fits within the session time.
7. Confirm powerful models are unavailable.
8. Set a $30 user-level hard budget for each student.
9. Enable **Stop usage when budget limit is reached**.
10. Keep one completed example for facilitator recovery, but do not include it
    in the student starter branch.

## Recovery

- If the page is blank before `/build-page`, everything is working.
- If the preview does not open, run `npm start` and open port `8000`.
- The `start` script checks whether port `8000` is already serving the app, so
  it is safe to run again.
- If question validation fails, check the four selected entries against
  `QUESTION-BANK.md`.
- If the quiz does not respond, ask the student to describe expected and actual
  behaviour to `/fix-one-problem`.
- If a student is behind at minute 45, help them finish `/build-quiz` and skip
  all optional work.

## Success criteria

A student succeeds when they can show a working quiz and explain:

- One decision they made in the plan
- Where questions are stored
- One job performed by JavaScript
- One test they used to check Copilot's work

## Product references

- [GitHub Copilot best practices](https://docs.github.com/en/copilot/get-started/best-practices)
- [VS Code prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files)
- [Codespaces port forwarding](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)
