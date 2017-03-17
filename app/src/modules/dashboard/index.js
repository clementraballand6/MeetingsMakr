angular.module('app.dashboard', [])
    .controller('DashboardCtrl', require('./controllers/dashboardCtrl'))
    .service('DashboardService', require('./services/dashboardService'));