angular.module('app.player', [])
    .controller('PlayerCtrl', require('./controllers/playerCtrl'))
    .controller('PlayerDetailsCtrl', require('./controllers/playerDetailsCtrl'))
    .service('PlayerService', require('./services/playerService'));