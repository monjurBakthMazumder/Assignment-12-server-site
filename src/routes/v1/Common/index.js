const allData = require("../../../api/v1/Common/allData");

const router = require("express").Router();

router.get("/all-data", allData);

module.exports = router;
