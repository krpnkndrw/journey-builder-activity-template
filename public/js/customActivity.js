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

  const suggestion = {
    Title_vod__c: "Ваше письмо не прочитали",
    Account_vod__c: "001f000001iIxQ9AAK",
    Expiration_Date_vod__c: "2021-10-17",
    Record_Type_Name_vod__c: "Email_vod",
    Priority_vod__c: "Urgent_vod",
  };

  setTimeout(() => getgetget("/test"), 1000);
  setTimeout(() => {
    createSuggestion({ ...suggestion, Reason_vod__c: "1test" });
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
    createSuggestion({
      ...suggestion,
      Reason_vod__c: "1requestedTriggerEventDefinition",
    });
    console.log(data);
  }

  function onRequestedInteraction(data) {
    console.log("*** requestedInteraction ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1requestedInteraction" });
    console.log(data);
  }

  function onRequestedInteractionDefaults(data) {
    console.log("*** requestedInteractionDefaults ***");
    createSuggestion({
      ...suggestion,
      Reason_vod__c: "1requestedInteractionDefaults",
    });
    console.log(data);
  }

  function onRequestedCulture(data) {
    console.log("*** onRequestedCulture ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1onRequestedCulture" });
    console.log(data);
  }

  function onGotoStep(data) {
    console.log("*** gotoStep ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1gotoStep" });
    console.log(stepObject);
  }

  function onUpdateSteps(data) {
    console.log("*** updateSteps ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1updateSteps" });
    console.log(stepObject);
  }

  function onRequestedDataSources(dataSources) {
    console.log("*** requestedDataSources ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1requestedDataSources" });
    console.log(dataSources);
  }

  function onRequestedInteraction(interaction) {
    console.log("*** requestedInteraction ***");
    createSuggestion({ ...suggestion, Reason_vod__c: "1requestedInteraction" });
    console.log(interaction);
  }

  function onRequestedTriggerEventDefinition(eventDefinitionModel) {
    console.log("*** requestedTriggerEventDefinition ***");
    createSuggestion({
      ...suggestion,
      Reason_vod__c: "1requestedTriggerEventDefinition",
    });
    console.log(eventDefinitionModel);
  }

  function initialize(data) {
    console.log(data);
    createSuggestion({ ...suggestion, Reason_vod__c: "1initialize" });
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
    createSuggestion({ ...suggestion, Reason_vod__c: "1onGetTokens" });
    console.log(tokens);
    authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    createSuggestion({ ...suggestion, Reason_vod__c: "1onGetEndpoints" });
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
