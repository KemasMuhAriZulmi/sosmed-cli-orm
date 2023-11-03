const router = require("express").Router();
const {postsController} = require("../controller");

router.get("/", postsController.getData);
router.post("/", postsController.create);

module.exports = router;