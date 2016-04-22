angular.module('mobiliar-app.controllers', [])

    .controller('StartCtrl', function (PlatformService, LocaleService, NavigationService, EnvironmentService, ACTUAL_ENVIRONMENT, ANALYTICS_IDS, AnalyticsService) {

        //make shure platform is ready before accessing device APIs (cordova)
        PlatformService.ready(function () {

            LocaleService.loadLocale()
                .then(
                    function () {
                        var environment = ACTUAL_ENVIRONMENT;
                        EnvironmentService.setEnv(environment);
                        AnalyticsService.startTracker(ANALYTICS_IDS[environment]);

                        NavigationService.navigate('/index', true);
                    }
                );

        });


    })


;