const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_ADDR,
        pass: process.env.MAIL_PASS
    }
})

const send_otp_mail = async (email) => {
    try {
        let otp = Math.floor(100000 + (Math.random() * 899999))
        await transporter.sendMail({
            from: `"Rent Muse 👻" <${process.env.MAIL_ADDR}>`,
            to: email,
            subject: "otp ✔",
            text: `Your otp for rentmuse is ${otp}.`,
        })
        return otp
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = send_otp_mail