define(["postmonger", "jsforce"], function (Postmonger, jsforce) {
  "use strict";

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  $(window).ready(onRender);

  const getgetget = async (path) => {
    const response = await fetch(path);
    const body = await response.json();
    console.log(body);
  };

  const createSuggestion = async (suggestion) => {
    const response = await fetch("/createSuggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(suggestion),
    });
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  };

  const sendLog = async (log) => {
    const response = await fetch("/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(log),
    });
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  };

  const suggestion = {
    Title_vod__c: "Ваше письмо не прочитали",
    Reason_vod__c: "Вы лох4",
    Account_vod__c: "001f000001iIxQ9AAK",
    Expiration_Date_vod__c: "2021-10-17",
    Record_Type_Name_vod__c: "Email_vod",
    Priority_vod__c: "Urgent_vod",
  };

  setTimeout(() => getgetget("/test"), 1000);
  setTimeout(() => {
    createSuggestion(suggestion);
  }, 2000);

  connection.on("initActivity", initialize);
  connection.on("requestedTokens", onGetTokens);
  connection.on("requestedEndpoints", onGetEndpoints);
  connection.on("requestedInteraction", onRequestedInteraction);
  connection.on(
    "requestedTriggerEventDefinition",
    onRequestedTriggerEventDefinition
  );
  connection.on("requestedDataSources", onRequestedDataSources);
  connection.on("updateSteps", onUpdateSteps);
  connection.on("gotoStep", onGotoStep);
  connection.on("requestedCulture", onRequestedCulture);
  connection.on("requestedInteractionDefaults", onRequestedInteractionDefaults);
  connection.on("requestedInteraction", onRequestedInteraction);
  connection.on(
    "requestedTriggerEventDefinition",
    onRequestedTriggerEventDefinition
  );

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

  function onRequestedTriggerEventDefinition(data) {
    console.log("*** requestedTriggerEventDefinition ***");
    console.log(data);
    sendLog({ requestedTriggerEventDefinition: data });
  }

  function onRequestedInteraction(data) {
    console.log("*** requestedInteraction ***");
    console.log(data);
    sendLog({ requestedInteraction: data });
  }

  function onRequestedInteractionDefaults(data) {
    console.log("*** requestedInteractionDefaults ***");
    console.log(data);
    sendLog({ requestedInteractionDefaults: data });
  }

  function onRequestedCulture(data) {
    console.log("*** onRequestedCulture ***");
    console.log(data);
    sendLog({ onRequestedCulture: data });
  }

  function onGotoStep(data) {
    console.log("*** gotoStep ***");
    console.log(stepObject);
    sendLog({ gotoStep: data });
  }

  function onUpdateSteps(data) {
    console.log("*** updateSteps ***");
    console.log(stepObject);
    sendLog({ updateSteps: data });
  }

  function onRequestedDataSources(dataSources) {
    console.log("*** requestedDataSources ***");
    console.log(dataSources);
    createSuggestion(suggestion);
    sendLog({ requestedDataSources: dataSources });
  }

  function onRequestedInteraction(interaction) {
    console.log("*** requestedInteraction ***");
    console.log(interaction);
    sendLog({ requestedInteraction: interaction });
  }

  function onRequestedTriggerEventDefinition(eventDefinitionModel) {
    console.log("*** requestedTriggerEventDefinition ***");
    console.log(eventDefinitionModel);
    sendLog({ requestedTriggerEventDefinition: eventDefinitionModel });
  }

  function initialize(data) {
    sendLog({ initialize: data });
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
    sendLog({ onGetTokens: tokens });
    authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    console.log(endpoints);
    sendLog({ onGetEndpoints: endpoints });
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
