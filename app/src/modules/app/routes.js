module.exports = function ($stateProvider) {

    $stateProvider.state({
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
        name: 'contact',
        url: '/contact/:id',
        controller: 'ContactCtrl',
        controllerAs: 'contactCtrl',
        templateUrl: 'modules/contact/partials/contact.html'
    });

};