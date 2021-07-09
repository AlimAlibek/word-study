const {Router} = require("express");
const controllers = require("./rout.controllers");
const middleware = require("./middleware");
const router = Router();

router.post("/registr", controllers.registr);
router.post("/login", controllers.login);

router.post("/setdata", middleware, controllers.setdata);
router.get("/getdata", middleware, controllers.getdata);

module.exports = router;