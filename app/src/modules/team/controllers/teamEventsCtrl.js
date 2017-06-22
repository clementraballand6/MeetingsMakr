module.exports = function (AppService, TeamService, ClubService, $stateParams, $state, Notif, $rootScope, EventService) {
    var self = this;
    self.show = false;
    self.new = {};
    self.clubId = $stateParams.id;
    console.log($stateParams);
    EventService.getClubEvents($stateParams.id).then(function (res) {
        self.events = res.data;
    });

    self.formatDate = function (date) {
        if (date === null) return 'Non défini';
        var date = new Date(date);
        return date.toLocaleDateString() + " à " + date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 3).replace(':', 'h');
    }

    self.add = function () {
        TeamService.addMember(self.new, self.team).then(function () {
            self.members.unshift(angular.copy(self.new));
            self.new = {};
            self.displayNewMemberForm = false;
            Notif.success('Nouveau membre ajouté.');
        })
    }

    return self;
};