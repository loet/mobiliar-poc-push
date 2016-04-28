angular.module('mobiliar-app.run', [])

    .run(function ($ionicPlatform, TranslationService) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }


        });
    })

    .run(function ($ionicPlatform, NotificationService) {
        $ionicPlatform.ready(function () {
            NotificationService.register();
        });
    })
;
