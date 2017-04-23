/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app', [
    'ui.router',
    'app',
    'app.settings',
    'app.team',
    'app.player',
    'app.dashboard',
    'app.club',
    'app.home'
])
    .service('AppService', require('./services/appService'))
    .controller('AppCtrl', require('./controllers/appCtrl'))
    .factory('Notif', require('./factories/notif'))
    .factory('App', require('./factories/app'))
    .constant('APP_CONSTANTS', {
        API_PATH: "http://localhost:3000/api/",
        DEFAULT_PAGE_TITLE: "MeetingsMakr"
    })
    .config(require("./routes"))
    .run(function ($rootScope, APP_CONSTANTS, $state, $window, App) {
        App.setTitle(APP_CONSTANTS.DEFAULT_PAGE_TITLE);

        var mail = JSON.parse($window.localStorage.getItem("mail"));
        $rootScope.isLogged = mail !== undefined;

        $.notify.defaults({globalPosition: 'top center'});

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            // App.setTitle("Chargement ...");
            console.log("changing");
            $rootScope.showLoader = true;
            $rootScope.current = toState;
        });

        $rootScope.$on('$stateChangeSuccess', function (APP_CONSTANTS, event, toState, toParams, fromState, fromParams) {
            console.log("changing success");
            $rootScope.showLoader = false;
        });
    });