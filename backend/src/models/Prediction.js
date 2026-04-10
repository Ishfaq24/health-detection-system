const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: String, // disease / heart / diabetes
  input: Object,
  result: Object,
}, { timestamps: true });

module.exports = mongoose.model("Prediction", predictionSchema);