import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = async (toEmail, token) => {
  const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: `"Eventify App" <eventify.email@gmail.com>`,
    to: toEmail,
    subject: "Verify your email",
    html: `
      <p>Chào bạn,</p>
      <p>Vui lòng nhấn vào link dưới đây để xác thực email:</p>
      <a href="${verifyUrl}">Xác thực email</a>
      <p>Link chỉ có hiệu lực trong 1 giờ.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendVerificationEmail;
