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

;
