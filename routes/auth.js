const express = require("express")
const { register, login, verify_otp } = require("../controllers/auth")
const route = express.Router()

route.post("/register", register)
// route.post("/login", login)
route.put("/verify", verify_otp)

module.exports = route