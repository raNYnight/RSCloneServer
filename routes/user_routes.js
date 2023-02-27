const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.post("/users", userController.createUser);
router.post("/authorize", userController.authorize);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getSingleUser);
router.delete("/users/:id", userController.deleteSingleUser);

module.exports = router;
