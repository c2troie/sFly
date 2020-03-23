//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var smtpTransport = require('nodemailer-smtp-transport');
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/sendEmail', function (req, res) {
  //console.log('REQ',req)
  //console.log('RES',res)

  
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: 'sfly.suppor@gmail.com',
        pass: 'sfly123741',
      })
        
    }
  });
  var mail = {
    from: "sfly.suppor@gmail.com",
    to: "k_ouazari@hotmail.fr",
    subject: "Newsletters",
    html: "Coucou"
  }

  smtpTransport.sendMail(mail, function(error, response){
    if(error){
      console.log("Erreur lors de l'envoie du mail!");
      
      //console.log(error);
    }else{
      console.log("Mail envoyé avec succès!")
    }
    smtpTransport.close();
  });

  
 });


app.listen(port);