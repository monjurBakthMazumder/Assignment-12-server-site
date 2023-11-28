const allUser = require("../../../api/v1/User/controllers/allUser");
const createUser = require("../../../api/v1/User/controllers/createUser");
const isAdmin = require("../../../api/v1/User/controllers/isAdmin");
const makeAdmin = require("../../../api/v1/User/controllers/makeAdmin");
const premiumUser = require("../../../api/v1/User/controllers/premiumUser");
const { verifyToken, verifyAdmin } = require("../../../middleware/auth");

const router = require("express").Router();

router.get("/users/premium/:email", verifyToken, premiumUser);
router.get("/users", verifyToken, verifyAdmin, allUser);
router.post("/users", createUser);
router.put("/users/make-admin", verifyToken, verifyAdmin, makeAdmin);
router.put("/users/make-premium-user", verifyToken, verifyAdmin, makeAdmin);
router.get("/users/admin/:email", verifyToken, isAdmin);

module.exports = router;
