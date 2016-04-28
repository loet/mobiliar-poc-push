angular.module('mobiliar-app.notifications.controllers', [])


    .controller('NotificationsCtrl', function ($scope, NotificationService, NotificationStore, $interval, NotificationTestService) {
        var ctrl = this;

        ctrl.notifications = NotificationStore.getNotifications();
        ctrl.text = 'notification';

        $scope.$on('$ionicView.beforeEnter', function () {
            ctrl.devices = NotificationStore.getDevice();
            $interval(function () {
                ctrl.notifications = NotificationStore.getNotifications();
            }, 100);
        });

        ctrl.pushTestNotification = function () {
            var array = ctrl.devices.split(',');
            NotificationTestService.pushTestNotification(array, ctrl.text);
        };

        ctrl.notificationDisabled = function () {
            return NotificationStore.getDevice() === undefined;
        };

    })


;