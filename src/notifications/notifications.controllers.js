angular.module('mobiliar-app.notifications.controllers', [])


    .controller('NotificationsCtrl', function ($scope, NotificationStore, $interval, NotificationTestService) {
        var ctrl = this;

        ctrl.notifications = NotificationStore.getNotifications();

        $scope.$on('$ionicView.beforeEnter', function () {
            ctrl.device = NotificationStore.getDevice();
            $interval(function () {
                ctrl.notifications = NotificationStore.getNotifications();
            }, 100);
        });

        ctrl.pushTestNotification = function() {
            NotificationTestService.pushTestNotification([NotificationStore.getDevice()]);
        };

        ctrl.notificationDisabled = function() {
          return NotificationStore.getDevice() === undefined;
        };

    })


;