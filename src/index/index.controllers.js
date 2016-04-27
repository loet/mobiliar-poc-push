angular.module('mobiliar-app.index.controllers', [])


    .controller('IndexCtrl', function ($scope, NavigationService, LocaleService) {
        var ctrl = this;

        $scope.$on('$ionicView.beforeEnter', function () {
            ctrl.language = LocaleService.getLanguage();
        });

    })


;