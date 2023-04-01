exports.generateOTP  = (otp_length = 6) => {


  // generate 6 digit otp
  let OTP = "";
  for (let i = 1; i <= 5; i++) {
    const randomVal = Math.round(Math.random() * 9);
    OTP += randomVal;
  }
  return OTP;
};

exports.generateMailTransporter = () =>
  nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c6dc0e4cb3a0ab",
      pass: "db979bf12232e5"
    }
  });