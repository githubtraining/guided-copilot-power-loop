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

Only run this prompt after the core quiz works.

Read the four app files and the project rules.

Ask the student to choose one:

- **timer:** ten seconds for each question
- **streak:** count correct answers in a row
- **confetti:** celebrate a perfect final score using CSS
- **hint:** reveal a short hint when requested

Implement only the selected choice.

Do not add packages or external services. Keep all existing quiz behaviour.
Run `npm test`, explain the change, and give exact browser test steps.

Stop after one finishing touch.
