const router = require("express").Router();
const auth = require("../middleware/auth");

const {
  disease,
  heart,
  diabetes,
  history,
} = require("../controllers/predictController");

router.post("/disease", auth, disease);
router.post("/heart", auth, heart);
router.post("/diabetes", auth, diabetes);

router.get("/history", auth, history);

module.exports = router;