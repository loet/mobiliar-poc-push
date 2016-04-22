angular.module('mobiliar-app.config', [])


    .config(function (uiGmapGoogleMapApiProvider, $ionicConfigProvider) {

        //uiGmapGoogleMapApiProvider.configure({
        //    //    key: 'your api key',
        //    key: 'AIzaSyAG9fPYsSz7NfoXwnj-fPY_E2JLy8_negU',
        //    v: '3.20', //defaults to latest 3.X anyhow
        //    libraries: 'visualization,places'
        //});

        //swipeBack works only with cached views; if we have to disable caching, we have to disable swipeBack
        //see https://github.com/driftyco/ionic/issues/3317
        $ionicConfigProvider.views.swipeBackEnabled(true);

        //25.11.2015: ionic javascript scrolling causes problems: when horizontal scroll is active,
        // the super element can not be scrolled vertically any more...
        //see http://www.thomasmaximini.com/2015/01/12/improving-scroll-performance-for-lists-in-ionic-framework.html
        //see also: http://forum.ionicframework.com/t/native-scrolling-android-testers-wanted/17059
        $ionicConfigProvider.scrolling.jsScrolling(false);
    });