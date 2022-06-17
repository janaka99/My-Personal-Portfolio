const router = require("express").Router();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const sanitizeHtml = require("sanitize-html");

const OAuth2 = google.auth.OAuth2;

const OAuth2Client = new OAuth2(
  process.env.GOOGLE_GMAIL_CLIENT_ID,
  process.env.GOOGLE_GMAIL_CLIENT_SECRET,
  process.env.GOOGLE_GMAIL_REDIRECT_URI
);
OAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_GMAIL_REFRESH_TOKEN,
});

router.post("/", async (req, res) => {
  try {
    const htmlcode = req.body.message;

    const msg = sanitizeHtml(htmlcode);
    if (htmlcode.length > 384000) {
      res.status(400).json({
        error: "Message Limit Exceeded!! maximum charatcers: 384000",
      });
    } else {
      const accessToken = OAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          type: "OAuth2",
          user: process.env.NODEMAILER_USER_EMAIL,
          clientId: process.env.GOOGLE_GMAIL_CLIENT_ID,
          clientSecret: process.env.GOOGLE_GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_GMAIL_REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: `New Contact <${process.env.NODEMAILER_RECEIVER_EMAIL}>`,
        to: process.env.NODEMAILER_RECEIVER_EMAIL,
        subject: "Contact Request",
        text: msg,
      };

      transport
        .sendMail(mailOptions)
        .then(
          // (result) => console.log("email sent", result)
          res.status(200).json({ message: "Successfully sent!!" })
        )
        .catch(
          // (err) => console.log(err)
          res.status(200).json({ error: "Something wrong! Try Again later" })
        );
    }
  } catch (error) {
    res.status(400).json({ error: "Something wrong! Try Again later" });
  }
});

module.exports = router;
