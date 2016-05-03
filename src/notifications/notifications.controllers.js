angular.module('mobiliar-app.notifications.controllers', [])


    .controller('NotificationsCtrl', function ($scope, NotificationService, NotificationStore, $cordovaBadge, $cordovaKeychain, $interval) {
        var ctrl = this;

        ctrl.notifications = NotificationStore.getNotifications();

        $scope.$on('$ionicView.beforeEnter', function () {
            ctrl.device = NotificationStore.getDevice();
            $interval(function () {
                ctrl.notifications = NotificationStore.getNotifications();
            }, 100);
        });

        $scope.$on('$ionicView.afterEnter', function () {
            var el = document.getElementById("sutra");
            var xPos = (el.offsetLeft - el.scrollLeft + el.clientLeft);
            //console.log('position: '+ xPos);
            //console.log('el width: '+ el.offsetWidth);
            //console.log('wrapper width: '+ document.getElementById("wrapper").offsetWidth);
            //console.log('screen width: '+ window.screen.width);
            console.log('scroll width: ' + el.scrollWidth);
            console.log('client width: ' + el.clientWidth);
            console.log('scroll left: ' + el.scrollLeft);
        });

        $scope.showInfo = function () {
            var el = document.getElementById("sutra"),
                scrollLeft = el.scrollLeft,
                scrollWidth = el.scrollWidth,
                clientWidth = el.clientWidth;
            var isAtEnd = scrollWidth - scrollLeft <= clientWidth;
            var isAtStart = scrollLeft == 0;
            alert('scroll left: ' + el.scrollLeft + ', isAtEnd: ' + isAtEnd + ', isAtStart: ' + isAtStart);
        };

        $scope.isAtStart = function () {
            var el = document.getElementById("sutra"),
                scrollLeft = el.scrollLeft;
            return scrollLeft <= 0;
        };

        $scope.isAtEnd = function () {
            var el = document.getElementById("sutra"),
                scrollLeft = el.scrollLeft,
                scrollWidth = el.scrollWidth,
                clientWidth = el.clientWidth,
                isAtEnd = scrollWidth - scrollLeft <= clientWidth;
            return isAtEnd;
        };

        ctrl.removeNotifications = function () {
            $cordovaBadge.set(0).then(function () {
                NotificationStore.removeNotifications();
                ctrl.notifications = [];
            }, function (err) {
                // You do not have permission.
            });

        };

        window.shake.startWatch(onShake, 30 /*, onError */);
        function onShake() {
            window.alert('shake');
        }


        ctrl.store = function () {
            $cordovaKeychain.setForKey('passphrase', 'customerapp', ctrl.passphrase);
        };
        ctrl.retrieve = function () {
            $cordovaKeychain.getForKey('passphrase', 'customerapp').then(function (value) {
                ctrl.passphrase = value;
            }, function (err) {
                console.error(err);
            });
        };


    })


;