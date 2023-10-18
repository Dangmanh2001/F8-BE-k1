var express = require("express");
const shortlinkController = require("../controller/shortlinkController");

var router = express.Router();


/* GET users listing. */
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/short_link");
    return
  }

  next();
};

/* Authentication Routes */
router.get("/",shortlinkController.index);
router.post("/",shortlinkController.shorten);
router.get("/manager",shortlinkController.manage)

module.exports = router;
