define([
  'postmonger'
], function (
  Postmonger
) {
  'use strict';

  var connection = new Postmonger.Session();
  var authTokens = {};
  $(window).ready(onRender);

  connection.on('initActivity', initialize);
  connection.on('requestedTokens', onGetTokens);
  connection.on('requestedEndpoints', onGetEndpoints);
  connection.on('requestedInteraction', onRequestedInteraction);
  connection.on('requestedTriggerEventDefinition', onRequestedTriggerEventDefinition);
  connection.on('requestedDataSources', onRequestedDataSources);

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
  }

  function onRequestedInteraction(interaction) {    
      console.log('*** requestedInteraction ***');
      console.log(interaction);
   }

   function onRequestedTriggerEventDefinition(eventDefinitionModel) {
      console.log('*** requestedTriggerEventDefinition ***');
      console.log(eventDefinitionModel);
  }

  function initialize(data) {
      console.log(data);

      document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );     

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

  function save() {
      try{          
        var configuration = JSON.parse( document.getElementById( 'configuration' ).value );

        // configuration['arguments'].execute.inArguments = [
        //     { "tokens": authTokens },
        //     // { "contactKey": "{{Contact.Key}}" },
        //     // { "FirstName": "{{Contact.Attribute.AndreyKa_test.first_name}}" },
        //     // { "email": "{{Contact.Attribute.AndreyKa_test.email}}" }
        //     {
        //         "account_id": "{{Contact.Attribute.AZ_test_1.account_id}}"
        //       },
        //       {
        //         "medical_rep_id": "{{Contact.Attribute.AZ_test_1.medical_rep_id}}"
        //       },
        //       {
        //         "created_date": "{{Contact.Attribute.AZ_test_1.created_date}}"
        //       },
        //       {
        //         "first_name": "{{Contact.Attribute.AZ_test_1.first_name}}"
        //       },
        //       {
        //         "last_name": "{{Contact.Attribute.AZ_test_1.last_name}}"
        //       },
        //       {
        //         "last_modified_medical_rep": "{{Contact.Attribute.AZ_test_1.last_modified_medical_rep}}"
        //       },
        //       {
        //         "last_modified_date": "{{Contact.Attribute.AZ_test_1.last_modified_date}}"
        //       },
        //       {
        //         "email": "{{Contact.Attribute.AZ_test_1.email}}"
        //       },
        //       {
        //         "specialty_1": "{{Contact.Attribute.AZ_test_1.specialty_1}}"
        //       },
        //       {
        //         "specialty_2": "{{Contact.Attribute.AZ_test_1.specialty_2}}"
        //       }
        // ];
        
        configuration['metaData'].isConfigured = true;        

        connection.trigger('updateActivity', configuration);
    }
    catch(err){
        console.log(err)
    }
  }
});