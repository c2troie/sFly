//server.js
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");
const geoip = require('geoip-lite');
const MongoClient = require("mongodb").MongoClient;

//CONST ENV
const MONGO_URL = "mongodb://khalid:khalid123741@ds052629.mlab.com:52629/sfly";
const COLLECTION_DB = "email";
const DATA_BASE = "sfly";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.set('trust proxy', true)

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

const insertEmail = async function(email,ip) {
  try {
    var geo = geoip.lookup(ip);
    MongoClient.connect(MONGO_URL, async function(err, client) {
      if (err) throw err;
      var db = client.db(DATA_BASE);

      await db
        .collection(COLLECTION_DB)
        .insertOne({ 
          email: email, 
          timestamp: Date.now(), 
          adress:{
            city:geo.city,
            country:geo.country,
            region: geo.region,
            ll:geo.ll
          } 
        });
      client.close();
    });
  } catch (e) {
    console.log("eerr", e);
  }
};

const nodeMailer = function (email) {
  let error;
  var transporter = nodemailer.createTransport(
    "smtps://sfly.suppor%40gmail.com:sfly123741@smtp.gmail.com"
  );
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"Sfly Support " <sfly.suppor@gmail.com>', // sender address
    //to: email, // list of receivers
    to: email, // list of receivers
    subject: "Newsletters ✔", // Subject line
    text: "Merci pour votre subscription à notre newsletters", // plaintext body
    html: "<b>Merci pour votre subscription à notre newsletters ????</b>" // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      error = true
      return console.log('Error send mail',error);
      
    }
    //console.log("Message sent: " + info.response);
    transporter.close();
    return info.response

  });
  return error;
  
}

app.post("/send-email", function(req, res) {
  let email = req.query.email;

    /** Insert Into DB **/
    insertEmail(email,req.ip); 
    /**************/

    /** Send Email **/
    if(!nodeMailer(email)){
      res.status(200).send({status:200});
    }
    else{
      res.status(500).send({status:500});
    }
    /**************/
});

app.listen(port);
