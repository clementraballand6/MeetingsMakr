require('angular');

/*******************
 * MODULES LOADING *
 *******************/
require('angular-route');
require('./modules/home');

/****************************
 * REGISTER MAIN APP MODULE *
 ****************************/
angular.module('app', [
    'ngRoute',
    'app.home'
]);