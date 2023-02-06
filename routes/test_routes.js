const Router = require("express");
const router = new Router();
const testController = require("../controller/test.controller");

router.get("/tests", testController.getTestsInfo);
router.get("/played/:test_id", testController.getPlayedTestsInfo);
router.get("/users/:id/played", testController.getUserPlayedAllTests);
router.get("/users/:id/played/:test_id", testController.getUserPlayedSpecificTest);

module.exports = router;
