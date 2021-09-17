define(["postmonger", "jsforce"], function (Postmonger, jsforce) {
  "use strict";

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  $(window).ready(onRender);

  /*const fetchF = async (path, suggestion) => {
    const messageBody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(suggestion),
    };
    const message = arguments.length > 1 ? [path, messageBody] : [path];
    const response = await fetch(...message);
    console.log(response);
    const result = await response.json();
    console.log(result);
  };*/
  const suggestion = {
    Title_vod__c: "Ваше письмо не прочитали",
    Reason_vod__c: "Вы лох",
    Account_vod__c: "001f000001iIxQ9AAK",
    Expiration_Date_vod__c: "2021-09-18",
    Record_Type_Name_vod__c: "Email_vod",
    Priority_vod__c: "Urgent_vod",
  };
  setTimeout(() => fetch("/test"), 1000);
  setTimeout(
    () =>
      fetch("/test2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(suggestion),
      }),
    2000
  );

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
