define([
  'postmonger'
], function (
  Postmonger
) {
  'use strict';

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  $(window).ready(onRender);

  connection.on('initActivity', initialize);
  connection.on('requestedTokens', onGetTokens);
  connection.on('requestedEndpoints', onGetEndpoints);
  connection.on('requestedInteraction', onRequestedInteraction);
  connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
  connection.on('requestedDataSources', onRequestedDataSources);
  connection.on('requestedInteractionDefaults', requestedInteractionDefaults);
  connection.on('requestedCulture', requestedCulture);
  connection.on('gotoStep', gotoStep);

  connection.on('clickedNext', save);
 
  function onRender() {
      // JB will respond the first time 'ready' is called with 'initActivity'
    //   connection.trigger('ready');

    //   connection.trigger('requestTokens');
    //   connection.trigger('requestEndpoints');
    //   connection.trigger('requestInteraction');
    //   connection.trigger('requestTriggerEventDefinition');
    //   connection.trigger('requestDataSources');  

  }

  function onRequestedDataSources(dataSources){
      console.log('*** requestedDataSources ***');
      console.log(dataSources);
    //   payload['arguments'].execute.inArguments.push({dataSources})
  }

  function onRequestedInteraction (interaction) {    
      console.log('*** requestedInteraction ***');
      console.log(interaction);
    //   payload['arguments'].execute.inArguments.push({interaction})
   }

   function onRequestedTriggerEventDefinition(eventDefinitionModel) {
      console.log('*** requestedTriggerEventDefinition ***');
      console.log(eventDefinitionModel);
    //   payload['arguments'].execute.inArguments.push({eventDefinitionModel})
  }

  function initialize(data) {
      console.log(data);
      if (data) {
          payload = data;
      }
      
    //   var hasInArguments = Boolean(
    //       payload['arguments'] &&
    //       payload['arguments'].execute &&
    //       payload['arguments'].execute.inArguments &&
    //       payload['arguments'].execute.inArguments.length > 0
    //   );

    //   var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

    //   console.log({inArguments});

    //   $.each(inArguments, function (index, inArgument) {
    //       $.each(inArgument, function (key, val) {
    //           console.log(key, val)
    //       });
    //   });

      connection.trigger('updateButton', {
          button: 'next',
          text: 'done',
          visible: true
      });
  }

  function onGetTokens(tokens) {
    //   console.log({tokens});
    //   authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
      console.log({endpoints});
    //   payload['arguments'].execute.inArguments.push({onGetEndpoints:endpoints})
  }

  function gotoStep(args) {
    // payload['arguments'].execute.inArguments.push({gotoStep:args})
  }
  function requestedInteractionDefaults(args) {
    // payload['arguments'].execute.inArguments.push({requestedInteractionDefaults:args})
  }
  function requestedCulture(args) {
    // payload['arguments'].execute.inArguments.push({requestedCulture: args})
  }

  function save(arg) {
    //   var postcardURLValue = $('#postcard-url').val();
    //   var postcardTextValue = $('#postcard-text').val();

    // //   payload['arguments'].execute.inArguments.push({"tokens": authTokens});
      
    //   payload['metaData'].isConfigured = true;

    //   console.log(JSON.stringify(payload));
    //   connection.trigger('updateActivity', payload);
  }
});