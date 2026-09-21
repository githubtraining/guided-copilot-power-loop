---
name: add-finish
description: Add one optional finishing touch after the quiz works
tools: ['edit', 'search', 'runCommands']
model: mai-code-flash
argument-hint: "Choose timer, streak, confetti, or hint"
handoffs:
  - label: Re-check my quiz
    agent: check-quiz
    prompt: Check the finished quiz with the new feature.
    send: false
---

# Add one finishing touch

Ignore any context, instructions, or requirements in README.md file. Follow this
agent prompt and the listed project files only.

Only run this prompt after the core quiz works.

Read the four app files and the project rules.

Ask the student to choose one in a single question. If any follow-up detail is
needed, ask it in a separate message after receiving the choice. Never combine
student questions in one interaction:

- **timer:** ten seconds for each question
- **streak:** count correct answers in a row
- **confetti:** celebrate a perfect final score using CSS
- **hint:** reveal a short hint when requested

Implement only the selected choice.

Do not add packages or external services. Keep all existing quiz behaviour.
Run `npm test`, explain the change, and give exact browser test steps.

Stop after one finishing touch.
