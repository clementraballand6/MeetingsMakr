module.exports = function ($stateProvider) {

    $stateProvider.state({
        name: 'home',
        url: '',
        data: {
            auth: "notLogged"
        },
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        templateUrl: 'modules/home/partials/home.html'
    }).state({
        name: 'dashboard',
        url: '/dashboard',
        data: {
            auth: "logged"
        },
        controller: 'DashboardCtrl',
        controllerAs: 'dashboardCtrl',
        templateUrl: 'modules/dashboard/partials/dashboard.html'
    }).state({
        name: 'settings',
        url: '/settings',
        data: {
            auth: "logged"
        },
        controller: 'SettingsCtrl',
        controllerAs: 'settingsCtrl',
        template: '<h1>HEY</h1>'
    }).state({
        name: 'editUser',
        url: '/editUser',
        data: {
            auth: "logged"
        },
        controller: 'AppCtrl',
        controllerAs: 'appCtrl',
        templateUrl: 'modules/app/partials/editUser.html'
    }).state({
        name: 'club',
        url: '/club',
        data: {
            auth: "logged"
        },
        controller: 'ClubCtrl',
        controllerAs: 'clubCtrl',
        templateUrl: 'modules/club/partials/club.html'
    }).state({
        name: 'clubDetails',
        url: '/club/:id',
        data: {
            auth: "logged"
        },
        controller: 'ClubCtrl',
        controllerAs: 'clubCtrl',
        templateUrl: 'modules/club/partials/clubDetails.html'
    }).state({
        name: 'login',
        url: '/login',
        data: {
            auth: "notLogged"
        },
        controller: 'AppCtrl',
        controllerAs: 'appCtrl',
        templateUrl: 'modules/app/partials/login.html'
    });

};