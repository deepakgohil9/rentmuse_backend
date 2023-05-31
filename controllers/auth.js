const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const send_otp_mail = require("../utils/send_mail")

const register = async (req, res, next) => {
    try {
        let salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
        req.body.otp = await send_otp_mail(req.body.email)

        let user = User(req.body)
        await user.save()
        res.send({
            message: "user created!",
            data: {
                _id: user._id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                address: user.address,
                city: user.city,
                birth_date: user.birth_date
            }
        })
    } catch (error) {
        next({ status: 400, message: error })
    }
}

const verify_otp = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            next({ status: 404, message: "user not found" })
            return
        }
        if (user.otp != req.body.otp) {
            next({ status: 400, message: "wrong otp!" })
            return
        }
        await User.updateOne(
            { email: req.body.email },
            {
                $set: { is_verified: true },
                $unset: { otp: "" }
            })
        res.send({ message: "otp verified successfully!" })
    } catch (error) {
        console.log(error)
        next({ status: 400, message: error })
    }
}


module.exports = { register, verify_otp }