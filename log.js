{
    "name": "Custom activity",
    "id": "7d9ae02d-215a-42a2-8028-9715e5811540",
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
                },
                {
                    "onGetEndpoints": {
                        "restHost": "rest.s50.exacttarget.com",
                        "stackKey": "S50",
                        "stackHost": "mc.s50.exacttarget.com",
                        "ssoUrl": "https://mc.s50.exacttarget.com/cloud/tools/SSO.aspx?env=default&legacy=1&sk=S50",
                        "fuelapiRestHost": "https://www-mc-s50.exacttargetapis.com/"
                    }
                },
                {
                    "interaction": {
                        "id": "ba86de12-187c-4531-a561-17d6d65ca449",
                        "version": 1,
                        "name": "test asndrey 30",
                        "description": "",
                        "workflowApiVersion": 1,
                        "entryMode": "OnceAndDone",
                        "activities": [
                            {
                                "key": "EMAILV2-1",
                                "name": "welcome email 2",
                                "description": "",
                                "type": "EMAILV2",
                                "outcomes": [
                                    {
                                        "key": "f8753a7d-d9e4-4750-b9bd-a13ffbcd48a0",
                                        "next": "WAITBYDURATION-2",
                                        "arguments": {},
                                        "metaData": {
                                            "invalid": false
                                        }
                                    }
                                ],
                                "schema": {
                                    "arguments": {
                                        "requestID": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "messageKey": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "activityId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "definitionId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": true,
                                            "access": "Hidden"
                                        },
                                        "emailSubjectDataBound": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": true,
                                            "access": "Hidden"
                                        },
                                        "contactId": {
                                            "dataType": "Number",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "contactKey": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "emailAddress": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "sourceCustomObjectId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "sourceCustomObjectKey": {
                                            "dataType": "LongNumber",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "fieldType": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "eventData": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "obfuscationProperties": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "customObjectKey": {
                                            "dataType": "LongNumber",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": true,
                                            "access": "Hidden"
                                        },
                                        "definitionInstanceId": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        }
                                    }
                                },
                                "metaData": {
                                    "icon": "https://jb-email-activity.s50.marketingcloudapps.com/img/email-icon.svg",
                                    "iconSmall": "https://jb-email-activity.s50.marketingcloudapps.com/img/email-icon.svg",
                                    "category": "message",
                                    "version": "1.0",
                                    "statsContactIcon": "",
                                    "original_iconSmall": "/img/email-icon.svg",
                                    "original_icon": "/img/email-icon.svg",
                                    "sections": {},
                                    "isConfigured": true
                                },
                                "arguments": {
                                    "activityId": "{{Activity.Id}}",
                                    "definitionId": "{{Context.DefinitionId}}",
                                    "emailSubjectDataBound": "Добро пожаловать в научно-образовательную рассылку от компании Сандоз",
                                    "contactId": "{{Contact.Id}}",
                                    "contactKey": "{{Contact.Key}}",
                                    "emailAddress": "{{InteractionDefaults.Email}}",
                                    "sourceCustomObjectId": "{{Contact.AddressInfo.Email.SourceCustomObjectId}}",
                                    "sourceCustomObjectKey": "{{Contact.AddressInfo.Email.SourceCustomObjectKey}}",
                                    "fieldType": "{{Contact.AddressInfo.Email.FieldType}}",
                                    "eventData": "{{Event}}",
                                    "obfuscationProperties": "{{InteractionDefaults.Email.ObfuscationProperties}}",
                                    "customObjectKey": "",
                                    "definitionInstanceId": "{{Context.DefinitionInstanceId}}"
                                },
                                "configurationArguments": {
                                    "triggeredSend": {
                                        "autoAddSubscribers": true,
                                        "autoUpdateSubscribers": true,
                                        "bccEmail": "",
                                        "ccEmail": "",
                                        "created": {},
                                        "domainExclusions": [],
                                        "dynamicEmailSubject": "Добро пожаловать в научно-образовательную рассылку от компании Сандоз",
                                        "emailId": 3393,
                                        "emailSubject": "Добро пожаловать в научно-образовательную рассылку от компании Сандоз",
                                        "exclusionFilter": "",
                                        "isSalesforceTracking": true,
                                        "isMultipart": true,
                                        "isSendLogging": true,
                                        "isStoppedOnJobError": false,
                                        "modified": {},
                                        "priority": 4,
                                        "sendClassificationId": "1ddab243-ce03-eb11-b83b-b88303587aa1",
                                        "deliveryProfileId": "1cdab243-ce03-eb11-b83b-b88303587aa1",
                                        "senderProfileId": "a2d29e98-d803-eb11-b83b-b88303587aa1",
                                        "isTrackingClicks": true,
                                        "publicationListId": 1498,
                                        "name": "welcome email 2 - 80ba788913144384939a902ef7927ba1",
                                        "preHeader": "",
                                        "description": "welcome email 2 - 1cb87c359c084173b349faadbf776a5c",
                                        "suppressTracking": false,
                                        "keyword": "",
                                        "throttleLimit": 0,
                                        "campaigns": [],
                                        "suppressionLists": []
                                    },
                                    "triggeredSendId": "90b5e59c-7e48-ec11-b875-b88303588a51",
                                    "triggeredSendKey": "22241",
                                    "isModified": false,
                                    "isSimulation": false,
                                    "googleAnalyticsCampaignName": "",
                                    "useLLTS": false,
                                    "fuelAgentRequested": false,
                                    "applicationExtensionKey": "jb-email-activity"
                                }
                            },
                            {
                                "key": "WAITBYDURATION-2",
                                "name": "1 minute",
                                "description": "",
                                "type": "WAIT",
                                "outcomes": [
                                    {
                                        "key": "4d73f4e2-2576-4455-bc2f-9c474612e48b",
                                        "next": "ENGAGEMENTSPLITV2-1",
                                        "arguments": {},
                                        "metaData": {
                                            "invalid": false
                                        }
                                    }
                                ],
                                "schema": {
                                    "arguments": {
                                        "endDate": {
                                            "dataType": "Date",
                                            "isNullable": false,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitEndDateAttributeDataBound": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitDefinitionId": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitForEventId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "executionMode": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "startActivityKey": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitQueueId": {
                                            "dataType": "LongNumber",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        }
                                    }
                                },
                                "metaData": {
                                    "isConfigured": true,
                                    "isExtended": false,
                                    "waitType": "duration",
                                    "guidanceCardKey": "",
                                    "uiType": "WAITBYDURATION"
                                },
                                "arguments": {
                                    "waitEndDateAttributeDataBound": "",
                                    "waitDefinitionId": "b75f8aee-d8b6-47e0-bf27-341985a90cb5",
                                    "waitForEventId": "",
                                    "executionMode": "{{Context.ExecutionMode}}",
                                    "startActivityKey": "{{Context.StartActivityKey}}",
                                    "waitQueueId": "{{Context.WaitQueueId}}"
                                },
                                "configurationArguments": {
                                    "waitDuration": 1,
                                    "waitUnit": "MINUTES",
                                    "specifiedTime": "00:00",
                                    "timeZone": "Russian Standard Time",
                                    "description": "",
                                    "waitEndDateAttributeExpression": "",
                                    "specificDate": "",
                                    "waitForEventKey": ""
                                }
                            },
                            {
                                "key": "ENGAGEMENTSPLITV2-1",
                                "name": "Open welcome email 2",
                                "description": "",
                                "type": "ENGAGEMENTDECISION",
                                "outcomes": [
                                    {
                                        "next": "WAITBYDURATION-3",
                                        "arguments": {
                                            "when": true
                                        },
                                        "metaData": {
                                            "label": "Yes",
                                            "invalid": false
                                        },
                                        "key": "branchResult-1"
                                    },
                                    {
                                        "next": "REST-1",
                                        "arguments": {
                                            "when": false
                                        },
                                        "metaData": {
                                            "label": "No",
                                            "invalid": false
                                        },
                                        "key": "branchResult-2"
                                    }
                                ],
                                "schema": {
                                    "arguments": {
                                        "conditionOutcome": {
                                            "dataType": "Boolean",
                                            "isNullable": false,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "definitionId": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "contactKey": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "statsKey": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "requestId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "messageKey": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        }
                                    }
                                },
                                "metaData": {
                                    "isConfigured": true,
                                    "guidanceCardKey": "",
                                    "refActivityName": "welcome email 2"
                                },
                                "arguments": {
                                    "definitionId": "{{Context.DefinitionId}}",
                                    "contactKey": "{{Context.ContactKey}}",
                                    "statsKey": "a37c0eba-97e5-413d-afd5-2a432269682f",
                                    "requestId": "{{Interaction.EMAILV2-1.RequestID}}",
                                    "messageKey": "{{Interaction.EMAILV2-1.MessageKey}}"
                                },
                                "configurationArguments": {
                                    "engagementUrls": {
                                        "urls": []
                                    },
                                    "statsTypeId": 2,
                                    "refActivityCustomerKey": "EMAILV2-1",
                                    "triggeredSendId": "90b5e59c-7e48-ec11-b875-b88303588a51",
                                    "statsUrlId": 0
                                }
                            },
                            {
                                "key": "WAITBYDURATION-3",
                                "name": "1 minute",
                                "description": "",
                                "type": "WAIT",
                                "outcomes": [
                                    {
                                        "key": "8ad7c8be-51eb-44fd-9838-6bba6c73335f",
                                        "arguments": {},
                                        "metaData": {
                                            "invalid": false
                                        },
                                        "next": null
                                    }
                                ],
                                "schema": {
                                    "arguments": {
                                        "endDate": {
                                            "dataType": "Date",
                                            "isNullable": false,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitEndDateAttributeDataBound": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitDefinitionId": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitForEventId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "executionMode": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "startActivityKey": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitQueueId": {
                                            "dataType": "LongNumber",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        }
                                    }
                                },
                                "metaData": {
                                    "isConfigured": true,
                                    "isExtended": false,
                                    "waitType": "duration",
                                    "guidanceCardKey": "",
                                    "uiType": "WAITBYDURATION"
                                },
                                "arguments": {
                                    "waitEndDateAttributeDataBound": "",
                                    "waitDefinitionId": "3e63b569-738a-4a59-86a3-aa2f993ddeb0",
                                    "waitForEventId": "",
                                    "executionMode": "{{Context.ExecutionMode}}",
                                    "startActivityKey": "{{Context.StartActivityKey}}",
                                    "waitQueueId": "{{Context.WaitQueueId}}"
                                },
                                "configurationArguments": {
                                    "waitDuration": 1,
                                    "waitUnit": "MINUTES",
                                    "specifiedTime": "00:00",
                                    "timeZone": "Russian Standard Time",
                                    "description": "",
                                    "waitEndDateAttributeExpression": "",
                                    "specificDate": "",
                                    "waitForEventKey": ""
                                }
                            },
                            {
                                "key": "REST-1",
                                "name": "Custom activity",
                                "description": "",
                                "type": "REST",
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
                                "schema": {
                                    "arguments": {
                                        "execute": {
                                            "inArguments": [],
                                            "outArguments": []
                                        }
                                    }
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
                                    "outArgumentSchema": {},
                                    "applicationExtensionKey": "8f8a7369-f14b-4f78-be44-bde8bb89f33f"
                                }
                            },
                            {
                                "key": "WAITBYDURATION-5",
                                "name": "1 minute",
                                "description": "",
                                "type": "WAIT",
                                "outcomes": [
                                    {
                                        "key": "63e7b298-40c1-4452-8332-bbf95d4cefb6",
                                        "arguments": {},
                                        "metaData": {
                                            "invalid": false
                                        },
                                        "next": null
                                    }
                                ],
                                "schema": {
                                    "arguments": {
                                        "endDate": {
                                            "dataType": "Date",
                                            "isNullable": false,
                                            "direction": "Out",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitEndDateAttributeDataBound": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitDefinitionId": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitForEventId": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "executionMode": {
                                            "dataType": "Text",
                                            "isNullable": false,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "startActivityKey": {
                                            "dataType": "Text",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        },
                                        "waitQueueId": {
                                            "dataType": "LongNumber",
                                            "isNullable": true,
                                            "direction": "In",
                                            "readOnly": false,
                                            "access": "Hidden"
                                        }
                                    }
                                },
                                "metaData": {
                                    "isConfigured": true,
                                    "isExtended": false,
                                    "waitType": "duration",
                                    "guidanceCardKey": "",
                                    "uiType": "WAITBYDURATION"
                                },
                                "arguments": {
                                    "waitEndDateAttributeDataBound": "",
                                    "waitDefinitionId": "a65b831f-ba05-4c87-b531-6a1ddd24e62c",
                                    "waitForEventId": "",
                                    "executionMode": "{{Context.ExecutionMode}}",
                                    "startActivityKey": "{{Context.StartActivityKey}}",
                                    "waitQueueId": "{{Context.WaitQueueId}}"
                                },
                                "configurationArguments": {
                                    "waitDuration": 1,
                                    "waitUnit": "MINUTES",
                                    "specifiedTime": "00:00",
                                    "timeZone": "Russian Standard Time",
                                    "description": "",
                                    "waitEndDateAttributeExpression": "",
                                    "specificDate": "",
                                    "waitForEventKey": ""
                                }
                            }
                        ],
                        "notifiers": [],
                        "persistenceModel_asyncStopping": {},
                        "persistenceModel_pausing": {},
                        "persistenceModel_resuming": {},
                        "metaData": {},
                        "key": "b78516c1-5fc1-b155-777a-0a2ffd2b0925",
                        "createdDate": "2021-11-18T14:55:49.0000Z",
                        "modifiedDate": "2021-11-18T14:55:49.0000Z",
                        "goals": [],
                        "exits": [],
                        "definitionType": "Multistep",
                        "channel": "",
                        "executionMode": "Production",
                        "categoryId": 9913,
                        "definitionId": "ba86de12-187c-4531-a561-17d6d65ca449",
                        "scheduledStatus": "Draft",
                        "defaults": {
                            "email": [
                                "{{Event.DEAudience-21066252-cf77-9988-d57c-55d429aed29a.\"email\"}}"
                            ],
                            "mobileNumber": [],
                            "transactionKeys": null,
                            "properties": {
                                "analyticsTracking": {
                                    "enabled": false,
                                    "analyticsType": "google",
                                    "urlDomainsToTrack": []
                                }
                            }
                        },
                        "triggers": [
                            {
                                "key": "TRIGGER",
                                "name": "test asndrey 12",
                                "description": "",
                                "type": "EmailAudience",
                                "arguments": {
                                    "startActivityKey": "{{Context.StartActivityKey}}",
                                    "dequeueReason": "{{Context.DequeueReason}}",
                                    "lastExecutedActivityKey": "{{Context.LastExecutedActivityKey}}",
                                    "filterResult": "true"
                                },
                                "configurationArguments": {
                                    "filterDefinitionId": "00000000-0000-0000-0000-000000000000",
                                    "criteria": "",
                                    "schemaVersionId": 0
                                },
                                "metaData": {
                                    "scheduleState": "No Schedule",
                                    "sourceInteractionId": "00000000-0000-0000-0000-000000000000",
                                    "eventDefinitionId": "DE431823-AE33-467E-86CB-06364CC88F35",
                                    "eventDefinitionKey": "DEAudience-21066252-cf77-9988-d57c-55d429aed29a",
                                    "chainType": "none",
                                    "configurationRequired": false,
                                    "iconUrl": "/images/icon-data-extension.svg",
                                    "title": "Data Extension",
                                    "category": "Audience",
                                    "entrySourceGroupConfigUrl": "jb:///data/entry/audience/entrysourcegroupconfig.json"
                                }
                            }
                        ],
                        "transactionKeys": null,
                        "status": "DRAFT"
                    }
                },
                {
                    "eventDefinitionModel": {
                        "id": "DE431823-AE33-467E-86CB-06364CC88F35",
                        "name": "test asndrey 30",
                        "mode": "Production",
                        "isVisibleInPicker": false,
                        "type": "EmailAudience",
                        "iconUrl": "/images/icon-data-extension.svg",
                        "eventDefinitionKey": "DEAudience-21066252-cf77-9988-d57c-55d429aed29a",
                        "dataExtensionId": "23081c05-ac17-ec11-b871-b88303588a51",
                        "createdDate": "2021-11-18T05:55:48.6470Z",
                        "createdBy": 710162135,
                        "modifiedDate": "2021-11-18T05:55:48.6470Z",
                        "modifiedBy": 710162135,
                        "sourceApplicationExtensionId": "97e942ee-6914-4d3d-9e52-37ecb71f79ed",
                        "isPlatformObject": false,
                        "category": "Audience",
                        "disableDEDataLogging": false,
                        "metaData": {
                            "scheduleState": "No Schedule",
                            "criteriaDescription": "",
                            "scheduleFlowMode": "runOnce",
                            "runOnceScheduleMode": "onPublish"
                        },
                        "arguments": {
                            "serializedObjectType": 3,
                            "eventDefinitionId": "de431823-ae33-467e-86cb-06364cc88f35",
                            "eventDefinitionKey": "DEAudience-21066252-cf77-9988-d57c-55d429aed29a",
                            "dataExtensionId": "23081c05-ac17-ec11-b871-b88303588a51",
                            "automationId": "678f82f6-2109-4389-8f30-a5a72eb1358f",
                            "criteria": "",
                            "useHighWatermark": false
                        },
                        "configurationArguments": {
                            "unconfigured": false
                        }
                    }
                },
                {
                    "dataSources": [
                        {
                            "id": "Event",
                            "name": "Entry: test asndrey 30",
                            "eventDefinitionKey": "DEAudience-21066252-cf77-9988-d57c-55d429aed29a",
                            "keyPrefix": "Event.DEAudience-21066252-cf77-9988-d57c-55d429aed29a.",
                            "schema": null,
                            "deSchema": {
                                "links": {},
                                "fieldCount": 2,
                                "fields": [
                                    {
                                        "description": "",
                                        "id": "49a37d91-d7b1-4741-b15c-2721d0d2885a",
                                        "isHidden": false,
                                        "isInheritable": false,
                                        "isNullable": false,
                                        "isOverridable": false,
                                        "isPrimaryKey": true,
                                        "isReadOnly": false,
                                        "isTemplateField": false,
                                        "length": 254,
                                        "masktype": "None",
                                        "mustOverride": false,
                                        "name": "email",
                                        "ordinal": 0,
                                        "storagetype": "Plain",
                                        "type": "EmailAddress"
                                    },
                                    {
                                        "defaultValue": "UsertName",
                                        "description": "",
                                        "id": "0c09b043-9d61-4c7b-9d16-68ff5081f381",
                                        "isHidden": false,
                                        "isInheritable": false,
                                        "isNullable": true,
                                        "isOverridable": false,
                                        "isPrimaryKey": false,
                                        "isReadOnly": false,
                                        "isTemplateField": false,
                                        "length": 50,
                                        "masktype": "None",
                                        "mustOverride": false,
                                        "name": "FirstName",
                                        "ordinal": 1,
                                        "storagetype": "Plain",
                                        "type": "Text"
                                    }
                                ],
                                "id": "23081c05-ac17-ec11-b871-b88303588a51"
                            },
                            "dataExtensionId": "23081c05-ac17-ec11-b871-b88303588a51"
                        },
                        {
                            "id": "ENGAGEMENTSPLITV2-1",
                            "name": "Custom Activity: Open welcome email 2",
                            "keyPrefix": "Interaction.ENGAGEMENTSPLITV2-1.",
                            "schema": {
                                "fields": []
                            }
                        },
                        {
                            "id": "WAITBYDURATION-2",
                            "name": "Custom Activity: 1 minute",
                            "keyPrefix": "Interaction.WAITBYDURATION-2.",
                            "schema": {
                                "fields": []
                            }
                        },
                        {
                            "id": "EMAILV2-1",
                            "name": "Custom Activity: welcome email 2",
                            "keyPrefix": "Interaction.EMAILV2-1.",
                            "schema": {
                                "fields": []
                            }
                        },
                        {
                            "id": "START-1",
                            "name": "",
                            "keyPrefix": "Interaction.START-1.",
                            "schema": {
                                "fields": []
                            }
                        }
                    ]
                },
                {
                    "tokens": {
                        "token": "0MlQnbdonPbSUrMRqaas-ErxSh7BL6-41NDixJ7ZQwvTEADOUnSpyzZlSLG3fVc58SHmDKB4Bh7K6y9YCcvVEi0p_3eAUctvPqh7sEysCLYsiTZtelQRYYIeNqlWZs39E7-BNIQSg_stEvdEcblx_qWEpvKkZAk-f_YVECGGumm_8vj4Wx--Crz9Zw8vXeVsVj-MxZ2Dc7oUgCN1CSdxbUgQGpMkgVswSZUDrl3yC3Qdua2QCR3dFsEDnKPYM-s8f88njmY43F3IgA5jUhvhp_A",
                        "fuel2token": "XMrNiT1jAmIbqmQF5z84vMBM",
                        "expires": 1637249221442,
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