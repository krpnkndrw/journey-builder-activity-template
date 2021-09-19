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
const CONFIGSF = require("./configSF.json");
// const ViberBot = require("viber-bot").Bot;
// const BotEvents = require("viber-bot").Events;

var app = express();

// Configure Express
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.raw({ type: "application/jwt" })); //так прилетает токен
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());//так нет

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

/*const createSuggestion = (suggestion) => {
  return new Promise((resolve, reject) => {
    conn.sobject("Suggestion_vod__c").create(suggestion, function (err, res) {
      if (err || !res.success) {
        return reject(err, res);
      }
      resolve(res);
    });
  });
};
app.post("/createSuggestion", (req, res) => {
  const suggestion = req.body;
  connect()
    .then(() => createSuggestion(suggestion))
    .then((result) => {
      res.send(JSON.stringify(result));
    });
});*/
app.get("/test", (req, res) => {
  res.send(JSON.stringify("♂♂♂♂"));
});
