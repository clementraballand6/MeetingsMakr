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
        controller: 'ClubDetailsCtrl',
        controllerAs: 'clubDetailsCtrl',
        templateUrl: 'modules/club/partials/clubDetails.html'
    }).state({
        name: 'team',
        url: '/team',
        data: {
            auth: "logged"
        },
        controller: 'TeamCtrl',
        controllerAs: 'teamCtrl',
        templateUrl: 'modules/team/partials/team.html'
    }).state({
        name: 'team.members',
        url: '/:id/members',
        data: {
            auth: "logged"
        },
        controller: 'TeamMembersCtrl',
        controllerAs: 'teamMembersCtrl',
        templateUrl: 'modules/team/partials/team/teamMembers.html'
    }).state({
        name: 'findTeam',
        url: '/findTeam',
        controller: 'FindTeamCtrl',
        controllerAs: 'findTeamCtrl',
        templateUrl: 'modules/team/partials/findTeam.html'
    }).state({
        name: 'team.events',
        url: '/:id/events',
        data: {
            auth: "logged"
        },
        controller: 'TeamEventsCtrl',
        controllerAs: 'teamEventsCtrl',
        templateUrl: 'modules/team/partials/team/teamEvents.html'
    }).state({
        name: 'team.details',
        url: '/:id/details',
        data: {
            auth: "logged"
        },
        controller: 'TeamDetailsCtrl',
        controllerAs: 'teamDetailsCtrl',
        templateUrl: 'modules/team/partials/team/teamDetails.html'
    }).state({
        name: 'team.settings',
        url: '/:id/settings',
        data: {
            auth: "logged"
        },
        controller: 'TeamSettingsCtrl',
        controllerAs: 'teamSettingsCtrl',
        templateUrl: 'modules/team/partials/team/teamSettings.html'
    }).state({
        name: 'player',
        url: '/player',
        data: {
            auth: "logged"
        },
        controller: 'PlayerCtrl',
        controllerAs: 'playerCtrl',
        templateUrl: 'modules/player/partials/player.html'
    }).state({
        name: 'player.details',
        url: '/:id',
        params: {
            from: null
        },
        data: {
            auth: "logged"
        },
        controller: 'PlayerCtrl',
        controllerAs: 'playerCtrl',
        templateUrl: 'modules/player/partials/playerDetails.html'
    }).state({
        name: 'closeEvents',
        url: '/closeEvents',
        data: {
            auth: "logged"
        },
        controller: 'CloseEventsCtrl',
        controllerAs: 'closeEventsCtrl',
        templateUrl: 'modules/closeEvents/partials/closeEvents.html'
    }).state({
        name: 'event',
        url: '/event/:id',
        data: {
            auth: "logged"
        },
        params: {
            from: null
        },
        controller: 'EventCtrl',
        controllerAs: 'eventCtrl',
        templateUrl: 'modules/event/partials/event.html'
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