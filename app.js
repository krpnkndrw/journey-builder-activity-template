"use strict";
// Module Dependencies
// -------------------
var express = require("express");
var bodyParser = require("body-parser");
var errorhandler = require("errorhandler");
var http = require("http");
// var https = require("https");
var path = require("path");
var request = require("request");
var routes = require("./routes");
var activity = require("./routes/activity");
const jsforce = require("jsforce");
// const ViberBot = require("viber-bot").Bot;
// const BotEvents = require("viber-bot").Events;

var app = express();

// Configure Express
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.raw({ type: "application/jwt" }));
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.methodOverride());
//app.use(express.favicon());

app.use(express.static(path.join(__dirname, "public")));

// Express in Development Mode
if ("development" == app.get("env")) {
  app.use(errorhandler());
}

// HubExchange Routes
app.get("/", routes.index);
app.post("/login", routes.login);
app.post("/logout", routes.logout);

// Custom Hello World Activity Routes
app.post("/journeybuilder/save/", activity.save);
app.post("/journeybuilder/validate/", activity.validate);
app.post("/journeybuilder/publish/", activity.publish);
app.post("/journeybuilder/execute/", activity.execute);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});

/************************************************/

const CONFIGSF = {
  salesforceName: "dev1@onpoint.ru",
  salesforcePassword: "ilove2test",
  salesforceSecurityToken: "4HWqiLg8IV374nkdpYhIBeVBc",
  salesforceLoginUrl: "https://test.salesforce.com",
  salesforceInstanceUrl: "https://cs16.salesforce.com",
};

const conn = new jsforce.Connection({
  loginUrl: CONFIGSF.salesforceLoginUrl,
  instanceUrl: CONFIGSF.salesforceInstanceUrl,
});

function connect() {
  return new Promise((resolve, reject) => {
    conn.login(
      CONFIGSF.salesforceName,
      CONFIGSF.salesforcePassword + CONFIGSF.salesforceSecurityToken,
      function (err, res) {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

const createSuggestion = (suggestion) => {
  return new Promise((resolve, reject) => {
    conn.sobject("Suggestion_vod__c").create(suggestion, function (err, res) {
      if (err || !res.success) {
        return reject(err, res);
      }
      resolve(res);
    });
  });
};
app.post("/test2", (req, res) => {
  console.log(req);
  res.json({ requestBody: req.body });
  //res.send(JSON.stringify(JSON.stringify(req)));
  /*connect()
    .then(() => createSuggestion(suggestion))
    .then((result) => {
      res.send(JSON.stringify(result));
    });*/
});
app.get("/test", (req, res) => {
  res.send(JSON.stringify("♂♂♂♂"));
});

// const ViberBot = require("viber-bot").Bot;
// const BotEvents = require("viber-bot").Events;

// const bot = new ViberBot({
//   authToken: "4db3a464c167dee7-d0221ef4a534d513-59ac5450dd11ebef",
//   name: "testbotonpoint",
//   avatar: "https://hotemoji.com/images/emoji/7/tgkksj2aq9h7.png", // It is recommended to be 720x720, and no more than 100kb.
// });

// bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
//   // Echo's back the message to the client. Your bot logic should sit here.
//   response.send(message);
// });
// const https = require('https');
// const botport = process.env.PORT || 8080;

// const webhookUrl = "https://andreyka-jb-test2.herokuapp.com/";
// const httpsOptions = {
// 	key: ...,
// 	cert: ...,
// 	ca: ...
// }; // Trusted SSL certification (not self-signed).

// https
//   .createServer(httpsOptions, bot.middleware())
//   .listen(botport, () => bot.setWebhook(webhookUrl));
