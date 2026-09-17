# Build a Catchphrase Quiz with GitHub Copilot

In one hour, you will use GitHub Copilot
to plan and build a working quiz app through the **Copilot Power Loop**:

| 🧠 1. PLAN | 🛠️ 2. BUILD | 👀 3. CHECK | 🧪 4. TEST |
| --- | --- | --- | --- |
| Decide what you want | Ask Copilot to build it | Read what changed | Try it yourself |

## You are the Builder. Copilot is your Helper.

Copilot cannot guess exactly what you want. You need to give it clear
instructions, like you would when explaining a task to a teammate.

In this exercise, the instructions are pre-made for you in **prompt files**. Each of them
tells Copilot:

- What to build
- Which files to look at
- What rules to follow
- How to check its work



## 🧠 1. PLAN your quiz — 8 minutes

Open and read
[`plan-quiz.prompt.md`](.github/prompts/plan-quiz.prompt.md).

Take note of:

- What Copilot must do
- Which files it will read
- What it must not do
- How you will test the result

Open the [`question bank`](QUESTION-BANK.md). Choose four letters, such as
**A, C, F and H**.

Select the Copilot icon to open **Copilot Chat**. Type this command and press
Enter:

```text
/plan-quiz
```

Read the plan. Ask Copilot to change anything you do not like.

**CHECK:** Does the plan use your quiz name, colours and four question letters?

When you are happy with it, tell Copilot:

```text
I approve this plan.
```

## 🛠️ 2. BUILD the page — 10 minutes

Open and read
[`build-page.prompt.md`](.github/prompts/build-page.prompt.md).

In Copilot Chat, run:

```text
/build-page
```

**CHECK:** Look at the files Copilot changed. Find your quiz name in
`index.html` and your colours in `styles.css`.

**TEST:** Refresh the browser. You should see your quiz design. The buttons
will not work yet because you have not built the quiz behaviour.

## 🛠️ 3. BUILD the questions — 8 minutes

Open and read
[`add-questions.prompt.md`](.github/prompts/add-questions.prompt.md).

In Copilot Chat, run:

```text
/add-questions
```

Give Copilot your four question letters.

**CHECK:** Open `questions.js`. Check that it contains your four questions and
four answers for each question.

**TEST:** Check that Copilot reports:

```text
Checked 4 quiz questions successfully.
```

The browser will not change yet. The questions are ready, but the quiz
behaviour has not been built.

## 🛠️ 4. BUILD the quiz behaviour — 14 minutes

Open and read
[`build-quiz.prompt.md`](.github/prompts/build-quiz.prompt.md).

In Copilot Chat, run:

```text
/build-quiz
```

**CHECK:** Read Copilot's explanation of the main functions in `app.js`. Ask
about anything you do not understand.

**TEST:**

1. Start the quiz.
2. Choose one wrong answer.
3. Choose one correct answer on the next question.
4. Finish all four questions.
5. Check the final score.
6. Restart and check that the score returns to zero.

## 👀 5. CHECK and 🧪 TEST the finished quiz — 10 minutes

In Copilot Chat, run:

```text
/check-quiz
```

Copilot will return a list marked **PASS** or **FIX**.

**TEST:** Try each item yourself. Do not trust a PASS until you have seen it
work.

If something does not work, run:

```text
/fix-one-problem
```

Tell Copilot:

- What you expected
- What actually happened

Test the fix before moving on.

## 🎉 6. Finish and show — 5 minutes

If your quiz works and you have time, run `/add-finish` for one optional
feature.

Show your quiz to another student. Explain one piece of code Copilot helped you
build.

## You are finished when

- You approved a plan before coding.
- You built the page.
- You added four questions.
- Start, answers, feedback, score, next, results and restart work.
- You tested both a correct and an incorrect answer.
- You can explain one code change.

## If the webpage disappears

Open the terminal at the bottom of Codespaces. Type this command and press
Enter:

```bash
npm start
```

Do not share passwords, personal information or secret keys with Copilot.
