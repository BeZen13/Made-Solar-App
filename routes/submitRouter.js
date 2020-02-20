const express = require("express");
const submitRouter = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config()

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Server is ready to take messages');
  };
});

submitRouter.post("/", (req,res,next) => {
  // console.log(req.body);
  const mail = {
    for: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,
    to: `samuelbetzen@gmail.com`,
    subject: `NEW MESSAGE via Made-Solar-App Contact Form. Subject: ${req.body.subject}`,
    text: `
      For: ${req.body.firstName} ${req.body.lastName}
      Email: ${req.body.email}
      Phone: ${req.body.phone}
      Address: ${req.body.address}
      Message:
      ${req.body.message}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
    };
  });
});

module.exports = submitRouter;

