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
                        "token": "0MlQnbdonPbSUrMRqaas-Eps4P7m8vfARubU66y_OMt2RDw16i_Yik9k2M5g3DTdSvixfUfaS6YSGIW_nP9RZtERRHUW5wFCr9hpf_wynohRnsDDO1_4Nar5nI9AUOtV7RTHAnYkWy-NxpUvtjGpojJ7OWlJQzXbJ6Q9SWbTzldbQaZCoixlS70GrZf8XqikiHiUvGMG_jZGvO-BB_y_a9RmIuKsDs77QcCJ3naCuyxz8gl69QUcOA6ZWRX9AlkqCemlQOepZWMmw5WjySbScUw",
                        "fuel2token": "XodNnzdVhvK12LrOQWpqHYfa",
                        "expires": 1637247937743,
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