define([
  'postmonger'
], function (
  Postmonger
) {
  'use strict';

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  const info = []
  $(window).ready(onRender);

  connection.on('initActivity', initialize);
  connection.on('requestedTokens', onGetTokens);
  connection.on('requestedEndpoints', onGetEndpoints);
  connection.on('requestedInteraction', onRequestedInteraction);
  connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
  connection.on('requestedDataSources', onRequestedDataSources);
//   connection.on('requestedInteractionDefaults', onAddInfo);
//   connection.on('requestedCulture', onAddInfo);
//   connection.on('gotoStep', onAddInfo);
//   connection.on('clickedBack', onAddInfo);

  connection.on('clickedNext', save);
 
  function onRender() {
      // JB will respond the first time 'ready' is called with 'initActivity'
      connection.trigger('ready');

      connection.trigger('requestTokens');
      connection.trigger('requestEndpoints');
      connection.trigger('requestInteraction');
      connection.trigger('requestTriggerEventDefinition');
      connection.trigger('requestDataSources');  

  }

  function onRequestedDataSources(dataSources){
      console.log('*** requestedDataSources ***');
      console.log(dataSources);
    //   info.push(dataSources)
  }

  function onRequestedInteraction (interaction) {    
      console.log('*** requestedInteraction ***');
      console.log(interaction);
    //   info.push(interaction)
   }

   function onRequestedTriggerEventDefinition(eventDefinitionModel) {
      console.log('*** requestedTriggerEventDefinition ***');
      console.log(eventDefinitionModel);
    //   info.push(eventDefinitionModel)
  }

  function initialize(data) {
      console.log(data);
      if (data) {
          payload = data;
      }
      
      var hasInArguments = Boolean(
          payload['arguments'] &&
          payload['arguments'].execute &&
          payload['arguments'].execute.inArguments &&
          payload['arguments'].execute.inArguments.length > 0
      );

      var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

      console.log(inArguments);

      $.each(inArguments, function (index, inArgument) {
        info.push(inArgument)
          $.each(inArgument, function (key, val) {
              console.log(key, val)
          });
      });

      connection.trigger('updateButton', {
          button: 'next',
          text: 'done',
          visible: true
      });
  }

  function onGetTokens(tokens) {
      console.log(tokens);
      authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
      console.log(endpoints);
  }

  const onAddInfo = (args) => {
    info.push(args)
  }

  function save(arg) {
      var postcardURLValue = $('#postcard-url').val();
      var postcardTextValue = $('#postcard-text').val();

      payload['arguments'].execute.inArguments = [{
          "tokens": authTokens,
          "info": info
      }];
      
      payload['metaData'].isConfigured = true;

      console.log(JSON.stringify(payload));
      connection.trigger('updateActivity', payload);
  }
});