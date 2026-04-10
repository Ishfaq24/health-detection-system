const axios = require("axios");

const BASE_URL = process.env.ML_BASE_URL;

exports.predictDisease = (symptoms) =>
  axios.post(`${BASE_URL}/predict-disease`, { symptoms });

exports.predictHeart = (data) =>
  axios.post(`${BASE_URL}/predict-heart-risk`, data);

exports.predictDiabetes = (data) =>
  axios.post(`${BASE_URL}/predict-diabetes`, data);