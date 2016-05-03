angular.module('mobiliar-app.routings', [])

    .config(function ($stateProvider, $urlRouterProvider) {


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('start', {
                url: '/',
                controller: 'StartCtrl as startCtrl'
            });

        $stateProvider
            .state('quicknotifications', {
                url: '/quicknotifications',
                controller: 'QuickCtrl as quickController'
            });


    });
