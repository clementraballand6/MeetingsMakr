/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app', [
    'ui.router',
    'app',
    'app.settings',
    'app.dashboard',
    'app.club',
    'app.home'
])
    .service('AppService', require('./services/appService'))
    .controller('AppCtrl', require('./controllers/appCtrl'))
    .factory('Notif', require('./factories/notif'))
    .constant('APP_CONSTANTS', {
        API_PATH: "http://localhost:3000/api/"
    })
    .config(require("./routes"))
    .run(function ($rootScope, $state, $window) {
        var mail = JSON.parse($window.localStorage.getItem("mail"));
        $rootScope.isLogged = mail !== undefined;

        $.notify.defaults({globalPosition: 'top center'});

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log("changing");
            $rootScope.showLoader = true;
            $rootScope.current = toState;
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log("changing success");
            $rootScope.showLoader = false;
        });
    });