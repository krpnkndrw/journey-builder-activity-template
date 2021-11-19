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
    connection.trigger('ready');

    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/render')

    //   connection.trigger('requestTokens');
    //   connection.trigger('requestEndpoints');
    //   connection.trigger('requestInteraction');
    //   connection.trigger('requestTriggerEventDefinition');
    //   connection.trigger('requestDataSources');  

  }

  function onRequestedDataSources(dataSources){
      axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/onRequestedDataSources')
      console.log('*** requestedDataSources ***');
      console.log(dataSources);
    //   payload['arguments'].execute.inArguments.push({dataSources})
  }

  function onRequestedInteraction (interaction) {  
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/onRequestedInteraction')  
      console.log('*** requestedInteraction ***');
      console.log(interaction);
    //   payload['arguments'].execute.inArguments.push({interaction})
   }

   function onRequestedTriggerEventDefinition(eventDefinitionModel) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/onRequestedTriggerEventDefinition') 
      console.log('*** requestedTriggerEventDefinition ***');
      console.log(eventDefinitionModel);
    //   payload['arguments'].execute.inArguments.push({eventDefinitionModel})
  }

  function initialize(data) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/initialize') 
      console.log("initialize", data);
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
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/onGetTokens') 
    //   console.log({tokens});
    //   authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/onGetEndpoints') 
      console.log({endpoints});
    //   payload['arguments'].execute.inArguments.push({onGetEndpoints:endpoints})
  }

  function gotoStep(args) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/gotoStep') 
    // payload['arguments'].execute.inArguments.push({gotoStep:args})
  }
  function requestedInteractionDefaults(args) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/requestedInteractionDefaults') 
    // payload['arguments'].execute.inArguments.push({requestedInteractionDefaults:args})
  }
  function requestedCulture(args) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/requestedCulture') 
    // payload['arguments'].execute.inArguments.push({requestedCulture: args})
  }

  function save(arg) {
    axios.get('https://andreyka-jb-test-3.herokuapp.com/journeybuilder/save') 
    //   var postcardURLValue = $('#postcard-url').val();
    //   var postcardTextValue = $('#postcard-text').val();

    // //   payload['arguments'].execute.inArguments.push({"tokens": authTokens});
      
    //   payload['metaData'].isConfigured = true;

    //   console.log(JSON.stringify(payload));
    connection.trigger('updateActivity', payload);
  }
});