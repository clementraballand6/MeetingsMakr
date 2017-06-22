angular.module('app.event', [])
    .controller('EventCtrl', require('./controllers/eventCtrl'))
    .service('EventService', require('./services/eventService'));