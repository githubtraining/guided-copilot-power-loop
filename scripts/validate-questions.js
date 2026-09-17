const assert = require("node:assert/strict");

require("../questions.js");

const questions = globalThis.QUIZ_QUESTIONS;

assert.ok(
  Array.isArray(questions),
  "questions.js must create globalThis.QUIZ_QUESTIONS as an array.",
);
assert.ok(questions.length >= 4, "Add at least four quiz questions.");

questions.forEach((question, index) => {
  const label = `Question ${index + 1}`;

  assert.ok(
    ["catchphrase", "emoji"].includes(question.type),
    `${label} must have the type "catchphrase" or "emoji".`,
  );
  assert.ok(question.question, `${label} needs question text.`);
  assert.ok(question.clue, `${label} needs a clue.`);
  assert.ok(Array.isArray(question.answers), `${label} needs an answers array.`);
  assert.equal(question.answers.length, 4, `${label} needs exactly four answers.`);
  assert.equal(
    new Set(question.answers).size,
    4,
    `${label} contains repeated answers.`,
  );
  assert.ok(
    question.answers.includes(question.correctAnswer),
    `${label}'s correct answer must appear in its answers.`,
  );

  if (question.type === "emoji") {
    assert.ok(
      question.accessibleClue,
      `${label} is an emoji question and needs an accessibleClue.`,
    );
  }
});

console.log(`Checked ${questions.length} quiz questions successfully.`);
