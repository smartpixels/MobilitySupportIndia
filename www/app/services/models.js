define(['require'], function(require) {

    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */

    var models = {
        "String": {
            "type": "string"
        },
        "Number": {
            "type": "number"
        },
        "marker": {
            "type": "object",
            "properties": {
                "longitude": {
                    "type": "string"
                },
                "latitude": {
                    "type": "string"
                }
            }
        },
        "Boolean": {
            "type": "boolean"
        },
        "Geolocation_currentPosition": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "enableHighAccuracy": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "maximumAge": {
                                    "type": "number",
                                    "default": 3000
                                },
                                "timeout": {
                                    "type": "number",
                                    "default": 300000
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "coords": {
                                    "type": "object",
                                    "properties": {
                                        "accuracy": {
                                            "type": "string"
                                        },
                                        "latitude": {
                                            "type": "string"
                                        },
                                        "longitude": {
                                            "type": "string"
                                        },
                                        "heading": {
                                            "type": "string"
                                        },
                                        "altitude": {
                                            "type": "string"
                                        },
                                        "altitudeAccuracy": {
                                            "type": "string"
                                        },
                                        "speed": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "timestamp": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "Geolocation_clearWatch": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "watchID": {
                                    "type": "number",
                                    "default": null
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "number",
                                "default": null
                            }]
                        }
                    }
                }
            }
        },
        "Geolocation_watchPosition": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "enableHighAccuracy": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "timeout": {
                                    "type": "number",
                                    "default": 300000
                                },
                                "maximumAge": {
                                    "type": "number",
                                    "default": 3000
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Camera_getPicture": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "allowEdit": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "encodingType": {
                                    "type": "string",
                                    "default": "JPEG"
                                },
                                "cameraPopoverOptions": {
                                    "type": "object",
                                    "properties": {
                                        "width": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "arrowDir": {
                                            "type": "string"
                                        },
                                        "x": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "y": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "height": {
                                            "type": "number",
                                            "default": null
                                        }
                                    }
                                },
                                "targetWidth": {
                                    "type": "number",
                                    "default": 480
                                },
                                "destinationType": {
                                    "type": "string",
                                    "default": "DATA_URL"
                                },
                                "cameraDirection": {
                                    "type": "string",
                                    "default": "BACK"
                                },
                                "quality": {
                                    "type": "number",
                                    "default": 75
                                },
                                "targetHeight": {
                                    "type": "number",
                                    "default": 320
                                },
                                "mediaType": {
                                    "type": "string",
                                    "default": "PICTURE"
                                },
                                "correctOrientation": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "saveToPhotoAlbum": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "sourceType": {
                                    "type": "string",
                                    "default": "CAMERA"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "image": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return models;

});