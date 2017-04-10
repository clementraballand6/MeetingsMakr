angular.module('app.club', [])
    .controller('ClubCtrl', require('./controllers/clubCtrl'))
    .service('ClubService', require('./services/clubService'));