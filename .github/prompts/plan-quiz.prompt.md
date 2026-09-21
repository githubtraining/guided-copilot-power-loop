---
name: plan-quiz
description: Plan the quiz before writing code
agent: plan
model: GPT-5.6 Terra
argument-hint: "Choose a name, colours, and four question IDs"
---

# Plan my quiz

Important: Ask the student for the required details before doing anything else.

Ask the student for:

1. A quiz name
2. Two main colours
3. Four question IDs from `QUESTION-BANK.md`

Do not edit any files until all three items have been provided.
Do not assume a quiz name or colours.
Do not invent question IDs.
Do not start building the quiz before the student answers.

Then write a short plan with exactly three build steps:

1. Build the page
2. Add the questions
3. Make the quiz work

For each step, say:

- What will be built
- Which file or files will change
- What the student will test

Keep the plan short and easy to understand.

Finish by asking the student to approve or change the plan.