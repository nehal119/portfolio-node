const express = require("express");
const compression = require("compression");
const app = express();
app.use(compression());

app.use(express.static(__dirname + "/public"));
require("dotenv").config();
// const sendMail = require("./mail");

//Data parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.post("/email", (req, res) => {
  return res.json({ message: "Email currently not available, netmask issue." });
  // const { subject, email, text } = req.body;
  // sendMail(email, subject, text, function(err) {
  //   if (err) {
  //     console.log("ERROR: ", err);
  //     return res.status(500).json({ message: err.message || "Internal Error" });
  //   }
  //   console.log("Email sent!");
  //   return res.json({ message: "Email sent!" });
  // });
});

//Routes Home
app.get("/", function(req, res) {
  res.render("index.ejs");
});

// Error page
app.get("/error", (req, res) => {
  res.render("error.ejs");
});

// Email sent page
app.get("/email/sent", (req, res) => {
  res.render("message.ejs");
});

//Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
