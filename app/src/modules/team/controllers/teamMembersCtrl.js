module.exports = function (AppService, TeamService, ClubService, $stateParams, $state, Notif, $rootScope) {
    var self = this;
    self.show = false;
    self.new = {};

    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
    })

    TeamService.getTeamMembers($stateParams.id).then(function (res) {
        self.members = res.data;
    });

    self.remove = function (index) {
        self.members.splice(index, 1);
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