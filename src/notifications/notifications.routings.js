angular.module('mobiliar-app.notifications.routings', [])

    .config(function ($stateProvider) {


        $stateProvider
            .state('notifications', {
                url: '/notifications',
                templateUrl: 'notifications/notifications.tpl.html',
                controller: 'NotificationsCtrl as notificationsCtrl',
                resolve: {
                    statusbar: function (PlatformService) {
                        if (PlatformService.isIOS()) {
                            PlatformService.hideStatusBar();
                        }
                    }
                }
            });

    });
