const allSuccessStory = require("../../../api/v1/SuccessStory/allSuccessStory");
const createSuccessStory = require("../../../api/v1/SuccessStory/createSuccessStory");
const singleSuccessStory = require("../../../api/v1/SuccessStory/singleSuccessStory");
const successStory = require("../../../api/v1/SuccessStory/successStory");
const { verifyToken } = require("../../../middleware/auth");

const router = require("express").Router();

router.get("/all-success-story", verifyToken, allSuccessStory);
router.get("/single-success-story/:email", verifyToken, singleSuccessStory);
router.get("/success-story", successStory);
router.post("/success-story", verifyToken, createSuccessStory);

module.exports = router;
