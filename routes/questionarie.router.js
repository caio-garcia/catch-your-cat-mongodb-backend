const router = require("express").Router();

const QuestionarieModel = require("../models/Questionarie.model");

//C
router.post("/create", async (req, res) => {
  try {
    const newQuestionarie = await QuestionarieModel.create(req.body);
    return res.status(201).json(newQuestionarie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//R ALL

router.get("/all", async (req, res) => {
  try {
    const allQuestionaires = await QuestionarieModel.find();
    return res.status(200).json(allQuestionaires);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//R ONE

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const theQuestionaire = await QuestionarieModel.findOne({ _id: id });
    return res.status(200).json(theQuestionaire);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//U

router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedQuestionaire = await QuestionarieModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(editedQuestionaire);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
//D

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedQuestionaire = await QuestionarieModel.deleteOne({ _id: id });
    return res.status(200).json(deletedQuestionaire);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
