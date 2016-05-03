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

            ThreeDeeTouch.configureQuickActions([
                {
                    type: 'assistance', // optional, but can be used in the onHomeIconPressed callback
                    title: 'Assistance', // mandatory
                    subtitle: 'Assistance anrufen', // optional
                    iconType: 'Message' // optional
                },
                {
                    type: 'agent', // optional, but can be used in the onHomeIconPressed callback
                    title: 'Berater', // mandatory
                    subtitle: 'Berater anschreiben', // optional
                    iconType: 'Mail' // optional
                }
            ]);

            ThreeDeeTouch.onHomeIconPressed = function (payload) {
                console.log("Icon pressed. Type: " + payload.type + ". Title: " + payload.title + ".");
                if (payload.type == 'assistance') {

                    window.open('tel:0795414892', '_system');
                } else if (payload.type == 'agent') {
                    window.open('mailto:loet@swissonline.ch', '_system');
                } else {
                    // hook up any other icons you may have and do something awesome (e.g. launch the Camera UI, then share the image to Twitter)
                    console.log(JSON.stringify(payload));
                }
            }


        });

    })
;
