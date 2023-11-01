const router = require("express").Router();
const { userController } = require("../controllers");

router.post("/", userController.create);
module.exports = router;
