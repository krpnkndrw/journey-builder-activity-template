{
    "trigger": {
        "id": {
            "a": "8f775e42-7129-4009-b838-ea630394b270",
            "b": null
        },
        "outcomes": {
            "a": []
        },
        "metaData": {
            "sourceInteractionId": {
                "a": "00000000-0000-0000-0000-000000000000"
            },
            "scheduleState": {
                "b": "No Schedule"
            }
        },
        "documentArguments": {
            "startActivityKey": {
                "a": "{{Context.StartActivityKey}}"
            },
            "dequeueReason": {
                "a": "{{Context.DequeueReason}}"
            },
            "lastExecutedActivityKey": {
                "a": "{{Context.LastExecutedActivityKey}}"
            },
            "filterResult": {
                "a": "true"
            },
            "serializedObjectType": {
                "b": 3
            },
            "eventDefinitionId": {
                "b": "8994fb97-9f4f-4600-bb83-1718b296c313"
            },
            "eventDefinitionKey": {
                "b": "DEAudience-fb4df53d-e218-762a-adfe-02f9da1dbd66"
            },
            "dataExtensionId": {
                "b": "23081c05-ac17-ec11-b871-b88303588a51"
            },
            "automationId": {
                "b": "99c3ea17-ebfd-42b2-838b-0dbcafcff3e6"
            }
        },
        "schemaVersionId": {
            "a": 0
        },
        "configurationArguments": {
            "a": {
                "filterDefinitionId": "00000000-0000-0000-0000-000000000000"
            }
        },
        "eventDefinition": {
            "saving": {
                "b": true
            },
            "categoryId": {
                "b": 12746
            },
            "deCreatedDate": {
                "b": "2021-09-17T11:40:21Z"
            },
            "deModifiedDate": {
                "b": "2021-09-17T11:40:21Z"
            },
            "categoryFullPath": {
                "b": "Data Extensions > Test Onpoint"
            }
        },
        "mode": {
            "b": "Production"
        },
        "isVisibleInPicker": {
            "b": false
        },
        "interactionCount": {
            "b": 1
        },
        "publishedInteractionCount": {
            "b": 0
        },
        "dataExtensionId": {
            "b": "23081c05-ac17-ec11-b871-b88303588a51"
        },
        "schema": {
            "b": null
        },
        "createdDate": {
            "b": "2021-11-17T23:11:36.853Z"
        },
        "createdBy": {
            "b": 710162135
        },
        "modifiedBy": {
            "b": 710162135
        },
        "dataExtensionName": {
            "b": "Andrey_test"
        },
        "sourceApplicationExtensionId": {
            "b": "a62ff9df-dc1c-4e9a-87cd-c05841d79f38"
        },
        "filterDefinitionTemplate": {
            "b": ""
        },
        "isPlatformObject": {
            "b": false
        },
        "category": {
            "b": "Audience"
        },
        "automationId": {
            "b": "003e18b5-c9e4-42de-a8ab-bd915bdbde02"
        },
        "disableDEDataLogging": {
            "b": false
        },
        "scheduleFlowMode": {
            "b": "runOnce"
        },
        "runOnceScheduleMode": {
            "b": "onPublish"
        },
        "unconfigured": {
            "b": false
        },
        "_originalDeAudienceType": {
            "b": "EmailAudience"
        },
        "config": {
            "b": {
                "internal": true,
                "scheduleEnabled": true,
                "scheduleTile": true,
                "supportsAutomationSchedule": true,
                "configurableHighWatermark": true,
                "userInterfaces": {
                    "summary": [
                        {
                            "fieldName": "startDateTime",
                            "valuePath": "schedule.startDateTime",
                            "label": "Start",
                            "timezoneOffsetPath": "timezoneOffset",
                            "type": "date",
                            "momentFormat": "LLL"
                        },
                        {
                            "fieldName": "timeZone",
                            "valuePath": "schedule.timeZone",
                            "label": "Time Zone"
                        },
                        {
                            "fieldName": "frequency",
                            "valuePath": "schedule.frequency",
                            "label": "Repeat",
                            "valueInLang": true
                        },
                        {
                            "fieldName": "interval",
                            "valuePath": "schedule.interval",
                            "label": "Repeat Every"
                        },
                        {
                            "fieldName": "customDayOfTheWeek",
                            "valuePath": "schedule",
                            "label": "Day(s) of the Week"
                        },
                        {
                            "fieldName": "scheduledDay",
                            "valuePath": "schedule.scheduledDay",
                            "label": "Scheduled Day"
                        },
                        {
                            "fieldName": "scheduledDayOfWeek",
                            "valuePath": "schedule.scheduledDayOfWeek",
                            "label": "Scheduled Day of the Week",
                            "valueInLang": true
                        },
                        {
                            "fieldName": "scheduledMonth",
                            "valuePath": "schedule.scheduledMonth",
                            "label": "Scheduled Month",
                            "valueInLang": true
                        },
                        {
                            "fieldName": "scheduledWeek",
                            "valuePath": "schedule.scheduledWeek",
                            "label": "Scheduled Week",
                            "valueInLang": true
                        },
                        {
                            "fieldName": "endDateTime",
                            "valuePath": "schedule.endDateTime",
                            "label": "End",
                            "type": "date",
                            "momentFormat": "LL"
                        },
                        {
                            "fieldName": "occurrences",
                            "valuePath": "schedule.occurrences",
                            "label": "End"
                        },
                        {
                            "fieldName": "useHighWatermark",
                            "valuePath": "useHighWatermark",
                            "label": "Evaluate new records only"
                        },
                        {
                            "fieldName": "automationName",
                            "valuePath": "automation.name",
                            "label": "Automation Name"
                        },
                        {
                            "fieldName": "activityName",
                            "valuePath": "activityName",
                            "label": "Activity Name"
                        },
                        {
                            "fieldName": "deRecordCount",
                            "valuePath": "deRecordCount",
                            "label": "Record Count"
                        },
                        {
                            "fieldName": "fileTriggerActive",
                            "valuePath": "automation.fileTrigger.triggerActive",
                            "label": "File Trigger Active"
                        },
                        {
                            "fieldName": "fileTriggerFolder",
                            "valuePath": "automation.fileTrigger.folderLocationText",
                            "label": "File Trigger Directory"
                        }
                    ]
                },
                "lang": {
                    "en-US": {
                        "never": "Never",
                        "hourly": "Hourly",
                        "daily": "Daily",
                        "weekly": "Weekly",
                        "monthly": "Monthly",
                        "yearly": "Yearly",
                        "sunday": "Sunday",
                        "monday": "Monday",
                        "tuesday": "Tuesday",
                        "wednesday": "Wednesday",
                        "thursday": "Thursday",
                        "friday": "Friday",
                        "saturday": "Saturday",
                        "First": "First",
                        "Second": "Second",
                        "Third": "Third",
                        "Fourth": "Fourth",
                        "Last": "Last",
                        "January": "January",
                        "February": "February",
                        "March": "March",
                        "April": "April",
                        "May": "May",
                        "June": "June",
                        "July": "July",
                        "August": "August",
                        "September": "September",
                        "October": "October",
                        "November": "November",
                        "December": "December",
                        "true": "Scheduled",
                        "00:00": "12:00 AM",
                        "01:00": "1:00 AM",
                        "02:00": "2:00 AM",
                        "03:00": "3:00 AM",
                        "04:00": "4:00 AM",
                        "05:00": "5:00 AM",
                        "06:00": "6:00 AM",
                        "07:00": "7:00 AM",
                        "08:00": "8:00 AM",
                        "09:00": "9:00 AM",
                        "10:00": "10:00 AM",
                        "11:00": "11:00 AM",
                        "12:00": "12:00 PM",
                        "13:00": "1:00 PM",
                        "14:00": "2:00 PM",
                        "15:00": "3:00 PM",
                        "16:00": "4:00 PM",
                        "17:00": "5:00 PM",
                        "18:00": "6:00 PM",
                        "19:00": "7:00 PM",
                        "20:00": "8:00 PM",
                        "21:00": "9:00 PM",
                        "22:00": "10:00 PM",
                        "23:00": "11:00 PM"
                    }
                },
                "entrySourceGroupConfigUrl": "jb:///data/entry/audience/"
            }
        },
        "deRecordCount": {
            "b": 1
        },
        "saving": {
            "b": true
        },
        "categoryId": {
            "b": 12746
        },
        "deCreatedDate": {
            "b": "2021-09-17T11:40:21Z"
        },
        "deModifiedDate": {
            "b": "2021-09-17T11:40:21Z"
        },
        "categoryFullPath": {
            "b": "Data Extensions > Test Onpoint"
        }
    }
}