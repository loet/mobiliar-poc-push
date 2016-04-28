angular.module('mobilliar-app.notifications.integrationservices', [])

    .factory('NotificationStore', function () {
        var _notifications = [], _device;
        return {
            addNotification: addNotification,
            getNotifications: getNotifications,
            setDevice: setDevice,
            getDevice: getDevice
        };

        function setDevice(device) {
            _device = device;
        }

        function getDevice() {
            return _device;
        }

        function addNotification(notification) {
            _notifications.push(notification);
        }

        function getNotifications() {
            return _notifications;
        }
    })

    .factory('NotificationService', function (NotificationStore) {
        return {
            register: register
        };

        function register() {
            var push = new Ionic.Push({
                "debug": true,
                "onNotification": function (notification) {
                    var payload = notification.payload;
                    console.log(notification, payload);
                    NotificationStore.addNotification(notification);
                }
            });

            push.register(function (token) {
                NotificationStore.setDevice(token.token);
                console.log("Device token:", token.token);
            }, function (msg) {
                console.error('Push registration failes: ' + msg);
            });
        }

    })

;
