const Prediction = require("../models/Prediction");
const ml = require("../services/mlService");

// Disease
exports.disease = async (req, res) => {
  const { symptoms } = req.body;

  if (!Array.isArray(symptoms) || symptoms.length === 0) {
    return res
      .status(400)
      .json({ message: "Please provide at least one symptom." });
  }

  try {
    const result = await ml.predictDisease(symptoms);

    await Prediction.create({
      userId: req.user.id,
      type: "disease",
      input: { symptoms },
      result: result.data,
    });

    res.json(result.data);
  } catch (err) {
    console.error("Disease prediction error", err.response?.data || err.message);
    const status = err.response?.status || 500;
    return res.status(status).json({
      message: "Disease prediction failed",
      details: err.response?.data,
    });
  }
};

// Heart
exports.heart = async (req, res) => {
  const result = await ml.predictHeart(req.body);

  await Prediction.create({
    userId: req.user.id,
    type: "heart",
    input: req.body,
    result: result.data,
  });

  res.json(result.data);
};

// Diabetes
exports.diabetes = async (req, res) => {
  const result = await ml.predictDiabetes(req.body);

  await Prediction.create({
    userId: req.user.id,
    type: "diabetes",
    input: req.body,
    result: result.data,
  });

  res.json(result.data);
};

// History
exports.history = async (req, res) => {
  const data = await Prediction.find({ userId: req.user.id });
  res.json(data);
};