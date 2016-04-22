angular.module('mobiliar-app.index.routings', [])

    .config(function ($stateProvider) {


        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'index/index.tpl.html',
                controller: 'IndexCtrl as indexCtrl',
                resolve: {
                    translations: function (TranslationService) {
                        return TranslationService.loadTranslations();
                    },
                    statusbar: function (PlatformService) {
                        if (PlatformService.isIOS()) {
                            PlatformService.hideStatusBar();
                        }
                    },
                    viewTracking: function (AnalyticsService, ANALYTICS_VIEWS) {
                        AnalyticsService.trackView(ANALYTICS_VIEWS.INDEX);
                    }
                }
            });

    });
