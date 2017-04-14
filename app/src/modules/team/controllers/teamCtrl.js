module.exports = function (TeamService, $stateParams) {
    var self = this;

    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
    });

    return self;
};