module.exports = function ($scope, AppService, TeamService, ClubService, $stateParams, $state, Notif, $rootScope, EventService) {

    var self = this;
    self.show = false;
    self.new = {};
    self.event = {};
    self.event.type = "1";
    self.clubId = $stateParams.id;

    EventService.getClubEvents($stateParams.id).then(function (res) {
        self.events = res.data;
    });

    self.addEvent = function () {
        self.event.id_club_ennemy = self.selectedTeamId;
        self.event.id_club = self.clubId;
        console.log(self.event);
        self.events.push(self.event);
        EventService.addEvent(self.event);
        self.event = {type: '1'};
        self.displayNewEventForm = false;
    }

    TeamService.getAllClubs().then(function (res) {
        self.allClubs = res.data;
    });

    self.formatDate = function (date) {
        if (date === null) return 'Non défini';
        var date = new Date(date);
        return date.toLocaleDateString() + " à " + date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 3).replace(':', 'h');
    }

    return self;
};