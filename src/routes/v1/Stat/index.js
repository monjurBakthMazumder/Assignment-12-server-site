
const allData = require("../../../api/v1/Stat/allData");
const { verifyToken } = require("../../../middleware/auth");

const router = require("express").Router();

router.get("/admin-stat", verifyToken, allData);

module.exports = router;
