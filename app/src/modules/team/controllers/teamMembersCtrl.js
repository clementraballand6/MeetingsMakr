module.exports = function (AppService, TeamService, ClubService, $stateParams, $state, Notif) {
    var self = this;
    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
    })

    TeamService.getTeamMembers($stateParams.id).then(function (res) {
        self.members = res.data;
    });
    // @TODO navbar equipe 'SETTING' 'PLAYERS' 'EVENTS'
    return self;
};