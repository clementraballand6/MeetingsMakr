module.exports = function ($stateProvider) {

    $stateProvider.state({
        name: 'home',
        url: '',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        templateUrl: 'modules/home/partials/home.html'
    }).state({
        name: 'inbox',
        url: '/inbox',
        controller: 'InboxCtrl',
        controllerAs: 'inboxCtrl',
        data: {
            isTab: true
        },
        templateUrl: 'modules/inbox/partials/inbox.html'
    }).state({
        name: 'settings',
        url: '/settings',
        controller: 'SettingsCtrl',
        controllerAs: 'settingsCtrl',
        data: {
            isTab: true
        },
        template: '<h1>HEY</h1>'
    }).state({
        name: 'login',
        url: '/login',
        controller: 'AppCtrl',
        controllerAs: 'appCtrl',
        templateUrl: 'modules/app/partials/login.html'
    });

};