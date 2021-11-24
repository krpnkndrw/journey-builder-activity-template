{
    "name": "",
    "id": "85ef13fe-30f2-41f1-9860-b0c5ede9b3bc",
    "key": "REST-1",
    "type": "REST",
    "arguments": {
        "executionMode": "{{Context.ExecutionMode}}",
        "definitionId": "{{Context.DefinitionId}}",
        "activityId": "{{Activity.Id}}",
        "contactKey": "{{Context.ContactKey}}",
        "execute": {
            "inArguments": [
                {
                    "tokens": {
                        "token": "0MlQnbdonPbSUrMRqaas-EmLNLKYroPn81Fh1IJt7Dl_wcPlZJBCtTgF6xPs1LaeGD47mqYg47z40LQ5wBwMYK9xA7Li9Aq1U7lMZOz7LcRfvHRz1RM-gd9gtnThfLpaQXYVnyzCNwVJob9ce2RqLG3-AzT9VJNypnIUds_Jnpo9F2xJdkv8pvMOYGSVHaMpiSDG1o9XoZTO-27C-JFW_yfgj2nWu--8SAswxGgff-KtRoUYceQjCHtYUWbFb95b1JcEYsen0PrDBzasuxSyedw",
                        "fuel2token": "X5geDieK7wa2ylNl2XzQ8mmk",
                        "expires": 1637751344270,
                        "stackKey": "S50"
                    }
                }
            ],
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/execute"
        },
        "testExecute": "",
        "startActivityKey": "{{Context.StartActivityKey}}",
        "definitionInstanceId": "{{Context.DefinitionInstanceId}}",
        "requestObjectId": "{{Context.RequestObjectId}}"
    },
    "configurationArguments": {
        "save": {
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/save",
            "verb": "POST",
            "useJwt": true
        },
        "testSave": "",
        "publish": {
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/publish",
            "verb": "POST",
            "useJwt": true
        },
        "testPublish": "",
        "unpublish": "",
        "stop": {
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/stop",
            "verb": "POST",
            "useJwt": true
        },
        "testStop": "",
        "testUnpublish": "",
        "partnerActivityId": "",
        "validate": {
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/validate",
            "verb": "POST",
            "useJwt": true
        },
        "testValidate": "",
        "outArgumentSchema": {}
    },
    "metaData": {
        "icon": "https://andreyka-jb-test-3.herokuapp.com/images/icon.png",
        "iconSmall": "https://andreyka-jb-test-3.herokuapp.com/images/iconSmall.png",
        "category": "message",
        "statsContactIcon": "",
        "original_icon": "images/icon.png",
        "original_iconSmall": "images/iconSmall.png",
        "isConfigured": true
    },
    "schema": {
        "arguments": {
            "execute": {
                "inArguments": [
                    {
                        "name": {
                            "dataType": "FirstName",
                            "isNullable": false,
                            "direction": "In",
                            "readOnly": false,
                            "access": "Hidden"
                        }
                    },
                    {
                        "email": {
                            "dataType": "Email",
                            "isNullable": false,
                            "direction": "In",
                            "readOnly": false,
                            "access": "Hidden"
                        }
                    }
                ],
                "outArguments": []
            }
        }
    },
    "editable": true,
    "outcomes": [
        {
            "key": "96941284-09d1-4bcf-aa3d-419e8fb3a9df",
            "next": "WAITBYDURATION-1",
            "arguments": {},
            "metaData": {
                "invalid": false
            }
        }
    ],
    "errors": null
}