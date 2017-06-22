module.exports = function ($scope, AppService, TeamService, ClubService, $stateParams, $state, Notif, $rootScope, EventService) {

    var self = this;

    EventService.getAllMeets().then(function (res) {
        self.meets = res.data;
    });

    self.formatDate = function (date) {
        if (date === null) return 'Non défini';
        var date = new Date(date);
        return date.toLocaleDateString() + " à " + date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 3).replace(':', 'h');
    }

    return self;
};