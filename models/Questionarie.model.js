const { Schema, model } = require("mongoose");

const questionarieSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  question1: { type: String, required: true },
  question2: { type: String, required: true },
  question3: { type: String, required: true },
  question4: { type: String, required: true },
  question5: { type: String, required: true },
  question6: { type: String, required: true },
  question7: { type: String, required: true },
  result: [new Schema({ catName: { type: String } })],
});

const QuestionarieModel = model("Questionarie", questionarieSchema);

module.exports = QuestionarieModel;
