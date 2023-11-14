const express = require("express")
const register = require("../controllers/auth")
const { check } = require('express-validator');

const Routers = express.Router()

Routers.route("/register").post([
    check('email', 'Please include a valid email').isEmail(),
  ],register.register)
Routers.route("/login").post(register.login)
Routers.route("/restLink/:id/:token").post(register.restLink).get(register.getrestlink)
Routers.route("/verifyotp/:id").post(register.verifySuccessful)
Routers.route("/resetotp/:id").post(register.resendotp)
Routers.route("/forgotpassword").post(register.forgotPassword)
Routers.route("/sandOtp").post(register.sandOtp)
Routers.route("/loginemail").post(register.loginEmail)

module.exports = Routers
