var express = require("express");
const shortlinkController = require("../controller/shortlinkController");

var router = express.Router();
const isLogout = (req, res, next) => {
    if (!req.user) {
      res.redirect("/login");
      return
    }
  
    next();
  };




/* Authentication Routes */
router.get("/",isLogout,shortlinkController.index);
router.post("/",isLogout,shortlinkController.shorten);
router.get("/manager",isLogout,shortlinkController.manage)
router.get("/edit/:id",isLogout,shortlinkController.edit)
router.post("/edit/:id",isLogout,shortlinkController.handleEdit)
router.get("/delete/:id",shortlinkController.delete)

module.exports = router;
