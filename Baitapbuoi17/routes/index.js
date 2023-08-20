var express = require('express');
var router = express.Router();
var indexCTL=require("../controller/indexCTL");
const servicesCTL = require('../controller/servicesCTL');
const galleryCTL = require('../controller/galleryCTL');
const contactCTL = require('../controller/contactCTL');
const aboutCTL = require('../controller/aboutCTL');

/* GET home page. */

router.get("/index",indexCTL.index)
router.get("/services",servicesCTL.service)
router.get("/gallery",galleryCTL.gallery)
router.get("/contact",contactCTL.contact)
router.get("/about",aboutCTL.about)
module.exports = router;
