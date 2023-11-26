
const allData = require("../../../api/v1/Stat/allData");

const router = require("express").Router();

router.get("/admin-stat", allData);

module.exports = router;
