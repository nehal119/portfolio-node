
// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport');

// const auth = {
//     auth: {
//         api_key: process.env.NODEMAIL_API_KEY ||  "c309b939bf86cb41d2b20e62f67f7dde-f696beb4-635562d3", 
//         domain: process.env.NODEMAIL_DOMAIN || "sandbox554de596feed477db04b666887e977cd.mailgun.org" 
//     }
// };

// const transporter = nodemailer.createTransport(mailGun(auth));


// const sendMail = (email, subject, text, cb) => {
//     const mailOptions = {
//         from: email,
//         to: "mohammadamiramir773@gmail.com", 
//         subject,
//         text
//     };

//     transporter.sendMail(mailOptions, function (err, data) {
//         if (err) {
//             return cb(err, null);
//         }
//         return cb(null, data);
//     });
// }

// module.exports = sendMail;
