/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app', [
    'ui.router',
    'app',
    'app.inbox',
    'app.contact',
    'app.settings'
])
    .service('AppService', require('./services/appService'))
    .controller('AppCtrl', require('./controllers/appCtrl'))
    .controller('TabsCtrl', require('./controllers/tabsCtrl'))
    .factory('Message', require('./factories/message'))
    .factory('Contact', require('./factories/contact'))
    .config(require("./routes"));