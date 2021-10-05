'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
var util = require('util');
var http = require('https');
const jsforce = require("jsforce");

exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path,
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Edit');
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Save');
};

/*
 * POST Handler for /execute/ route of Activity.
 */

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
const suggestion = {
  Title_vod__c: "Ваше письмо не прочитали",
  Account_vod__c: "001f000001iIxQ9AAK",
  Expiration_Date_vod__c: "2021-06-17",
  Record_Type_Name_vod__c: "Email_vod",
  Priority_vod__c: "Urgent_vod",
  Reason_vod__c: `test 1`,
};
exports.execute = function (req, res) {

    // example on how to decode JWT
    JWT(req.body, process.env.jwtSecret, (err, decoded) => {

        // verification error -> unauthorized request
        if (err) {
            console.error(err);
            return res.status(401).end();
        }

        if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            
            
            // decoded in arguments
            var decodedArgs = decoded.inArguments[0];
            
            logData(req);
            logData(decodedArgs)
            connect()
              .then(() => createSuggestion(suggestion))
              .then(() => logData("suggestionCreated"));

            res.send(200, 'Execute');
        } else {
            console.error('inArguments invalid.');
            return res.status(400).end();
        }
    });
};


/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Validate');
};