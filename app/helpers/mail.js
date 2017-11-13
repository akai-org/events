'use strict';
const nodemailer = require('nodemailer');

module.exports = (mail) => {
  let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  });

  transporter.sendMail({
    from: mail.from,
    to: 'kontakt@akai.org.pl',
    subject: mail.subject,
    text: mail.text
  }, (err, info) => {
    if (err) {
      console.log(err);
      return err;
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Envelope: %s', info.envelope);
    console.log(info.envelope);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return 'OK';
  });
};
