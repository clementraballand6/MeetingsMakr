angular.module('app.home', [])
    .controller('HomeCtrl', require('./controllers/homeCtrl'))
    .service('HomeService', require('./services/homeService'));