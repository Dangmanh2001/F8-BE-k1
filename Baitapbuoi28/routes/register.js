var express = require('express');
const registerController = require('../controllers/registerController');
const RegisterValidate = require('../middlewares/RegisterValidate');
var router = express.Router();

/* GET users listing. */
router.get('/',registerController.register);
router.post("/",RegisterValidate(),registerController.handleRegister)

module.exports = router;
