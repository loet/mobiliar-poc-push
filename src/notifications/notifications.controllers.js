angular.module('mobiliar-app.notifications.controllers', [])


    .controller('NotificationsCtrl', function ($scope, NotificationService, NotificationStore, $cordovaBadge, $interval) {
        var ctrl = this;

        ctrl.notifications = NotificationStore.getNotifications();

        $scope.$on('$ionicView.beforeEnter', function () {
            ctrl.device = NotificationStore.getDevice();
            $interval(function () {
                ctrl.notifications = NotificationStore.getNotifications();
            }, 100);
        });

        ctrl.removeNotifications = function () {
            $cordovaBadge.set(0).then(function () {
                NotificationStore.removeNotifications();
                ctrl.notifications = [];
            }, function (err) {
                // You do not have permission.
            });

        }

    })


;