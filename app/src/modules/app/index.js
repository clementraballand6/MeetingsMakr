/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app', [
    'ui.router',
    'app',
    'app.settings',
    'app.dashboard',
    'app.home'
])
    .service('AppService', require('./services/appService'))
    .controller('AppCtrl', require('./controllers/appCtrl'))
    .factory('Message', require('./factories/message'))
    .factory('Contact', require('./factories/contact'))
    .constant('APP_CONSTANTS', {
        API_PATH: "http://localhost:3000/api/"
    })
    .config(require("./routes"))
    .run(function ($rootScope, $state, $window) {
        var user = JSON.parse($window.localStorage.getItem("user"));
        console.log(user);
        $rootScope.user = {
            infos: user,
            isLogged: user !== null
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log("changing");
            $rootScope.showLoader = true;
            $rootScope.current = toState;
            if (toState.name === "login" && $rootScope.user.isLogged) {
                console.log("gqsdgs");
                event.preventDefault();
                $state.go("home");
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log("changing success");
            $rootScope.showLoader = false;
        });
    });