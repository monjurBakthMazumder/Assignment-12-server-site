
const allData = require("../../../api/v1/Stat/allData");
const stat = require("../../../api/v1/Stat/stat");
const { verifyToken, verifyAdmin } = require("../../../middleware/auth");

const router = require("express").Router();

router.get("/stat", stat);
router.get("/admin-stat", verifyToken, verifyAdmin, allData);

module.exports = router;
