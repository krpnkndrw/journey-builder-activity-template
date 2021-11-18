{
    "name": "Custom activity",
    "id": "fbecaa15-6ea6-4cab-ac0b-9980056595f8",
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
                        "token": "0MlQnbdonPbSUrMRqaas-EsC7YbaNZZ5EFeYiWSWMljhqg7yCvicsU3XJYz0tuYWhAuVKzlsMBUEgmaIW0z4tT9kJLCCCZMKUhXLQH-sTwkZAj5_6iwupvFWqK8NVjAE03iFf4raHdh04YZcuvZ7LNb-LDbNj2qtdFQQAIUa1RUwIRNzmM3_gCS1Yr1xemglw8iS2wT1dWZr6dqoHKLWTVVs9Qvr3QDnSVEPFLGglYSwhrO2uXoO-0zPUmxscDo-oo4z5CvsnJ5z_mac0MdczJg",
                        "fuel2token": "XNmjfFN24m3lQVkINzk7khWB",
                        "expires": 1637246961633,
                        "stackKey": "S50"
                    }
                }
            ],
            "outArguments": [],
            "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/execute",
            "verb": "POST",
            "body": "",
            "header": "",
            "format": "json",
            "useJwt": true,
            "timeout": 10000
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
                "inArguments": [],
                "outArguments": []
            }
        }
    },
    "editable": true,
    "outcomes": [
        {
            "key": "042052f4-ff08-4938-8ff6-8c13d2de8782",
            "next": "WAITBYDURATION-5",
            "arguments": {},
            "metaData": {
                "invalid": false
            }
        }
    ],
    "errors": null
}