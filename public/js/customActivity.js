define(["postmonger", "jsforce"], function (Postmonger, jsforce) {
  "use strict";

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  $(window).ready(onRender);

  const getAllData = async () => {
    const response = await fetch("/test");
    const body = await response.json();
    console.log(body);
  };
  setInterval(() => getAllData(), 1000);

  const CONFIGSF = {
    salesforceName: "dev1@onpoint.ru",
    salesforcePassword: "ilove2test",
    salesforceSecurityToken: "HQXZauOH0NggWOVERV042UWs1",
    salesforceLoginUrl: "https://test.salesforce.com",
    salesforceInstanceUrl: "https://cs16.salesforce.com",
    ftpHost: "crm-13-ftp-us.veevacrm.com",
    ftpUser: "a@onpoint.ru",
    ftpPassword: "ilove2test",
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
  const suggestion = {
    Title_vod__c: "Title",
    Reason_vod__c: "1",
    Account_vod__c: "001f000001iIxQ9AAK",
    Expiration_Date_vod__c: "2021-09-18",
    Record_Type_Name_vod__c: "Email_vod",
    Priority_vod__c: "Urgent_vod",
  };

  const createSuggestion = (suggestion) => {
    return new Promise((resolve, reject) => {
      conn.sobject("Suggestion_vod__c").create(suggestion, function (err, ret) {
        if (err || !ret.success) {
          return console.error(err, ret);
        }
        console.log("Created record id : " + ret.id);
      });
    });
  };
  connect().then(() => createSuggestion(suggestion));

  connection.on("initActivity", initialize);
  connection.on("requestedTokens", onGetTokens);
  connection.on("requestedEndpoints", onGetEndpoints);
  connection.on("requestedInteraction", onRequestedInteraction);
  connection.on(
    "requestedTriggerEventDefinition",
    onRequestedTriggerEventDefinition
  );
  connection.on("requestedDataSources", onRequestedDataSources);

  connection.on("clickedNext", save);

  function onRender() {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger("ready");

    connection.trigger("requestTokens");
    connection.trigger("requestEndpoints");
    connection.trigger("requestInteraction");
    connection.trigger("requestTriggerEventDefinition");
    connection.trigger("requestDataSources");
  }

  function onRequestedDataSources(dataSources) {
    console.log("*** requestedDataSources ***");
    console.log(dataSources);
  }

  function onRequestedInteraction(interaction) {
    console.log("*** requestedInteraction ***");
    console.log(interaction);
  }

  function onRequestedTriggerEventDefinition(eventDefinitionModel) {
    console.log("*** requestedTriggerEventDefinition ***");
    console.log(eventDefinitionModel);
  }

  function initialize(data) {
    console.log(data);
    if (data) {
      payload = data;
    }

    var hasInArguments = Boolean(
      payload["arguments"] &&
        payload["arguments"].execute &&
        payload["arguments"].execute.inArguments &&
        payload["arguments"].execute.inArguments.length > 0
    );

    var inArguments = hasInArguments
      ? payload["arguments"].execute.inArguments
      : {};

    console.log(inArguments);

    $.each(inArguments, function (index, inArgument) {
      $.each(inArgument, function (key, val) {});
    });

    connection.trigger("updateButton", {
      button: "next",
      text: "done",
      visible: true,
    });
  }

  function onGetTokens(tokens) {
    console.log(tokens);
    authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    console.log(endpoints);
  }

  function save() {
    var postcardURLValue = $("#postcard-url").val();
    var postcardTextValue = $("#postcard-text").val();

    payload["arguments"].execute.inArguments = [
      {
        tokens: authTokens,
      },
    ];

    payload["metaData"].isConfigured = true;

    console.log(payload);
    connection.trigger("updateActivity", payload);
  }
});
