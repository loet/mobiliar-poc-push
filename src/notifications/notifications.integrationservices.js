angular.module('mobilliar-app.notifications.services', [])

    .factory('NotificationTestService', function ($http) {

        var config = {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MTY5OTIxNC0xZWE0LTRjMjctYTgxMS05NmQwOGU5ZTA1ZDQifQ.2VOfiar6hCkND6tNfMwFtJo2azUvlR5sXikEHRMxbOM'}};

        return {
            pushTestNotification: pushTestNotification
        };

        function pushTestNotification(tokens) {
            var notification = {
                "tokens": tokens,
                "profile": "pocpushtestprofile",
                "notification": {
                    "message": "Hello, dies ist eine Push Notification"
                }
            };
            $http.post('https://api.ionic.io/push/notifications', notification, config);
        }


    })

;
