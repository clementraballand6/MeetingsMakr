/**********************************
 *    REGISTER MAIN APP MODULE    *
 * LINK EVERY MODULES IN ITS DEPS *
 **********************************/
angular.module('app.inbox', [])
    .controller('InboxCtrl', require('./controllers/inboxCtrl'));