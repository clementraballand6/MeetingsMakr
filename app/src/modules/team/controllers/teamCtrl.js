module.exports = function (TeamService, $stateParams, ClubService, $state, App) {
    var self = this;

    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
        App.setTitle('Equipe ' + self.team.name);
    });

    self.removeTeam = function () {
        ClubService.removeClub(self.team.id).then(function () {
            $state.go('club');
        });
    }

    return self;
};