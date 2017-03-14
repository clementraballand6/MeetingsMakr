/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app', [
    'ui.router',
    'app',
    'app.settings',
    'app.home'
])
    .service('AppService', require('./services/appService'))
    .controller('AppCtrl', require('./controllers/appCtrl'))
    .controller('TabsCtrl', require('./controllers/tabsCtrl'))
    .factory('Message', require('./factories/message'))
    .factory('Contact', require('./factories/contact'))
    .config(require("./routes"))
    .run(function ($rootScope) {
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