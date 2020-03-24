//server.js
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");


app.use(favicon(__dirname + "/build/favicon.ico"));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/send-email", function(req, res) {
  let email = req.query.email
  console.log("email", email);
  //console.log('RES',res)
  var transporter = nodemailer.createTransport(
    "smtps://sfly.suppor%40gmail.com:sfly123741@smtp.gmail.com"
  );
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"Sfly Support " <sfly.suppor@gmail.com>', // sender address
    to: "k_ouazari@hotmail.fr", // list of receivers
    subject: "Newsletters ✔", // Subject line
    text: "Merci pour votre subscription à notre newsletters", // plaintext body
    html: "<b>Merci pour votre subscription à notre newsletters ????</b>" // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: " + info.response);
    transporter.close();
    return res.send(info);
  });
});

app.listen(port);
