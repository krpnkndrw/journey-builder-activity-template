{
    "activities": {
        "0": {
            "key": {
                "a": "REST-2",
                "b": "WAITBYDURATION-3"
            },
            "name": {
                "a": "",
                "b": "1 minute"
            },
            "type": {
                "a": "REST",
                "b": "WAITBYDURATION"
            },
            "outcomes": {
                "0": {
                    "key": {
                        "a": "d2b9f1e2-a4d5-46a8-80c6-7f9ce83196c5",
                        "b": "1e6c0321-4378-4802-9ef0-ef6d6c695390"
                    },
                    "next": {
                        "a": "WAITBYDURATION-1",
                        "b": "STOP-2"
                    }
                }
            },
            "schema": {
                "a": {
                    "arguments": {
                        "execute": {
                            "inArguments": [],
                            "outArguments": []
                        }
                    }
                }
            },
            "metaData": {
                "icon": {
                    "a": "https://andreyka-jb-test-3.herokuapp.com/images/icon.png"
                },
                "iconSmall": {
                    "a": "https://andreyka-jb-test-3.herokuapp.com/images/iconSmall.png"
                },
                "category": {
                    "a": "message"
                },
                "statsContactIcon": {
                    "a": ""
                },
                "original_icon": {
                    "a": "images/icon.png"
                },
                "original_iconSmall": {
                    "a": "images/iconSmall.png"
                },
                "isExtended": {
                    "b": false
                },
                "waitType": {
                    "b": "duration"
                },
                "guidanceCardKey": {
                    "b": null
                }
            },
            "documentArguments": {
                "executionMode": {
                    "a": "{{Context.ExecutionMode}}"
                },
                "definitionId": {
                    "a": "{{Context.DefinitionId}}"
                },
                "activityId": {
                    "a": "{{Activity.Id}}"
                },
                "contactKey": {
                    "a": "{{Context.ContactKey}}"
                },
                "execute": {
                    "a": {
                        "inArguments": [
                            {
                                "contactKey": "{{Contact.Key}}"
                            },
                            {
                                "email": "{{InteractionDefaults.email}}"
                            },
                            {
                                "email2": "{{Contact.Attribute.Dataset1.email}}"
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
                    }
                },
                "testExecute": {
                    "a": ""
                },
                "startActivityKey": {
                    "a": "{{Context.StartActivityKey}}"
                },
                "definitionInstanceId": {
                    "a": "{{Context.DefinitionInstanceId}}"
                },
                "requestObjectId": {
                    "a": "{{Context.RequestObjectId}}"
                }
            },
            "applicationExtensionKey": {
                "a": "8f8a7369-f14b-4f78-be44-bde8bb89f33f",
                "b": "81C1F0FF-8C8E-46F9-A4CA-F886526FA64B"
            },
            "configurationArguments": {
                "save": {
                    "a": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/save",
                        "verb": "POST",
                        "useJwt": true
                    }
                },
                "testSave": {
                    "a": ""
                },
                "publish": {
                    "a": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/publish",
                        "verb": "POST",
                        "useJwt": true
                    }
                },
                "testPublish": {
                    "a": ""
                },
                "unpublish": {
                    "a": ""
                },
                "stop": {
                    "a": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/stop",
                        "verb": "POST",
                        "useJwt": true
                    }
                },
                "testStop": {
                    "a": ""
                },
                "testUnpublish": {
                    "a": ""
                },
                "partnerActivityId": {
                    "a": ""
                },
                "validate": {
                    "a": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/validate",
                        "verb": "POST",
                        "useJwt": true
                    }
                },
                "testValidate": {
                    "a": ""
                },
                "outArgumentSchema": {
                    "a": {}
                },
                "waitDuration": {
                    "b": 1
                },
                "waitUnit": {
                    "b": "MINUTES"
                },
                "timeZone": {
                    "b": "Russian Standard Time"
                },
                "specifiedTime": {
                    "b": "00:00"
                }
            }
        },
        "1": {
            "key": {
                "a": "WAITBYDURATION-3",
                "b": "START-1"
            },
            "name": {
                "a": "1 day",
                "b": ""
            },
            "description": {
                "a": ""
            },
            "type": {
                "a": "WAITBYDURATION",
                "b": "START"
            },
            "outcomes": {
                "0": {
                    "key": {
                        "a": "1e6c0321-4378-4802-9ef0-ef6d6c695390"
                    },
                    "arguments": {
                        "a": {}
                    },
                    "next": {
                        "a": "STOP-2",
                        "b": "REST-1"
                    }
                }
            },
            "schema": {
                "a": {
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
                }
            },
            "metaData": {
                "a": {
                    "isConfigured": true,
                    "uiType": "WAITBYDURATION"
                }
            },
            "documentArguments": {
                "a": {
                    "waitEndDateAttributeDataBound": "",
                    "waitDefinitionId": "2188f245-a15e-4d44-b587-453828fc3b75",
                    "waitForEventId": "",
                    "executionMode": "{{Context.ExecutionMode}}",
                    "startActivityKey": "{{Context.StartActivityKey}}",
                    "waitQueueId": "{{Context.WaitQueueId}}"
                }
            },
            "applicationExtensionKey": {
                "a": "81C1F0FF-8C8E-46F9-A4CA-F886526FA64B"
            },
            "configurationArguments": {
                "a": {
                    "waitDuration": 1,
                    "waitUnit": "DAYS",
                    "specifiedTime": "",
                    "timeZone": "",
                    "description": "",
                    "waitEndDateAttributeExpression": "",
                    "specificDate": "",
                    "waitForEventKey": ""
                }
            }
        },
        "2": {
            "key": {
                "a": "START-1",
                "b": "STOP-2"
            },
            "type": {
                "a": "START",
                "b": "STOP"
            },
            "outcomes": {
                "0": {
                    "a": {
                        "next": "REST-1",
                        "metaData": {
                            "invalid": false
                        }
                    }
                }
            }
        },
        "3": {
            "type": {
                "a": "STOP",
                "b": "REST"
            },
            "key": {
                "a": "STOP-2",
                "b": "REST-1"
            },
            "outcomes": {
                "0": {
                    "b": {
                        "next": "WAITBYDURATION-3",
                        "metaData": {
                            "invalid": false
                        }
                    }
                }
            },
            "applicationExtensionKey": {
                "b": "8f8a7369-f14b-4f78-be44-bde8bb89f33f"
            },
            "documentArguments": {
                "b": {
                    "execute": {
                        "inArguments": [
                            {
                                "email": "{{InteractionDefaults.email}}"
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
                    }
                }
            },
            "configurationArguments": {
                "b": {
                    "save": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/save",
                        "verb": "POST",
                        "useJwt": true
                    },
                    "publish": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/publish",
                        "verb": "POST",
                        "useJwt": true
                    },
                    "stop": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/stop",
                        "verb": "POST",
                        "useJwt": true
                    },
                    "validate": {
                        "url": "https://andreyka-jb-test-3.herokuapp.com/journeybuilder/validate",
                        "verb": "POST",
                        "useJwt": true
                    },
                    "applicationExtensionKey": "8f8a7369-f14b-4f78-be44-bde8bb89f33f"
                }
            },
            "metaData": {
                "b": {
                    "icon": "https://andreyka-jb-test-3.herokuapp.com/images/icon.png",
                    "iconSmall": "https://andreyka-jb-test-3.herokuapp.com/images/iconSmall.png",
                    "category": "message",
                    "statsContactIcon": null,
                    "original_icon": "images/icon.png",
                    "original_iconSmall": "images/iconSmall.png",
                    "isConfigured": true
                }
            },
            "schema": {
                "b": {
                    "arguments": {
                        "execute": {
                            "inArguments": [],
                            "outArguments": []
                        }
                    }
                }
            }
        }
    }
}