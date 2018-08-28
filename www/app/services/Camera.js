define(['require', 'lodash'],

    function (require, _) {

        return [{
            type: 'service',
            name: 'Camera_getPicture',
            deps: ['Apperyio', getPicture]
        }];

        function _getFromEnum(enumObject, value) {
            if (typeof value !== 'number') {
                return enumObject[value];
            }
            return value;
        }

        function getPicture(Apperyio) {
            var $q = Apperyio.get('$q');

            return function (options) {
                var deferred = $q.defer(),
                    serviceSettings = Apperyio.EntityAPI("Camera_getPicture"),
                    fromConfig = serviceSettings.request.data;

                if (_.isUndefined(serviceSettings.echo)) {
                    if (typeof(navigator.camera) === 'undefined') {
                        deferred.reject('navigator.camera not found');
                    } else {
                        var camera = navigator.camera;
                        var mergedOptions = _.extend({}, fromConfig, options);

                        // {@link https://github.com/apache/cordova-plugin-camera#camerapopoveroptions}
                        if (mergedOptions.cameraPopoverOptions) {
                            mergedOptions.cameraPopoverOptions.arrowDir = _getFromEnum(camera.PopoverArrowDirection,
                                mergedOptions.cameraPopoverOptions.arrowDir);
                        }

                        // {@link https://github.com/apache/cordova-plugin-camera#cameraoptions}
                        var resultOptions = {
                            quality: parseInt(mergedOptions.quality) || 80,
                            destinationType: _getFromEnum(camera.DestinationType, mergedOptions.destinationType),
                            sourceType: _getFromEnum(camera.PictureSourceType, mergedOptions.sourceType),
                            allowEdit: mergedOptions.allowEdit,
                            encodingType: _getFromEnum(camera.EncodingType, mergedOptions.encodingType),
                            targetWidth: parseInt(mergedOptions.targetWidth) || 1024,
                            targetHeight: parseInt(mergedOptions.targetHeight) || 768,
                            popoverOptions: mergedOptions.cameraPopoverOptions,
                            saveToPhotoAlbum: mergedOptions.saveToPhotoAlbum,
                            cameraDirection: _getFromEnum(camera.Direction, mergedOptions.cameraDirection),
                            mediaType: _getFromEnum(camera.MediaType, mergedOptions.mediaType),
                            correctOrientation: mergedOptions.correctOrientation
                        };

                        navigator.camera.getPicture(
                            function (success) {
                                if (resultOptions.destinationType === camera.DestinationType.DATA_URL) {
                                    if (resultOptions.encodingType === camera.EncodingType.JPEG) {
                                        success = "data:image/jpeg;base64," + success;
                                    }
                                    if (resultOptions.encodingType === camera.EncodingType.PNG) {
                                        success = "data:image/png;base64," + success;
                                    }
                                }
                                deferred.resolve({
                                    "image": success
                                });
                            },
                            deferred.reject,
                            resultOptions);
                    }
                } else {
                    deferred.resolve(JSON.parse(serviceSettings.echo));
                }
                return deferred.promise;
            };
        }
    });