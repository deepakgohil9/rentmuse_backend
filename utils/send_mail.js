const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_ADDR,
    pass: process.env.MAIL_PASS,
  },
});

const send_otp_mail = async (email) => {
  try {
    let otp = Math.floor(100000 + Math.random() * 899999);
    await transporter.sendMail({
      from: `"Rent Muse 👻" <${process.env.MAIL_ADDR}>`,
      to: email,
      subject: "otp ✔",
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
              <div style="border-bottom:1px solid #eee">
                <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Rent Muse</a>
              </div>
              <p style="font-size:1.1em">Hi,</p>
              <p>Thank you for choosing Your Brand. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
              <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
              <p>If you didn't request this code, you can safely ignore this email. Someone else might have typed your email address by mistake.</p>
              <p style="font-size:0.9em;">Regards,<br />Rent Muse</p>
              <hr style="border:none;border-top:1px solid #eee" />
              <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                <p>Rent Muse </p>
                <p>Rajlabdhi Gandhinagar</p>
                <p>Gujrat</p>
              </div>
            </div>
          </div>`,
    });
    return otp;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = send_otp_mail;
