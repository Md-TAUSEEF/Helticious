const express = require("express");
const router = express.Router();


const authController = require("../Controller/Auth")


router.post("/login",authController.loginUser);

router.post("/registor",authController.register)

module.exports = router