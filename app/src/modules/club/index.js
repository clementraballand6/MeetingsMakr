angular.module('app.club', [])
    .controller('ClubCtrl', require('./controllers/clubCtrl'))
    .controller('ClubDetailsCtrl', require('./controllers/clubDetailsCtrl'))
    .service('ClubService', require('./services/clubService'));