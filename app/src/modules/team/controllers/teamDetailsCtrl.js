module.exports = function (AppService, TeamService, $stateParams, Notif, $rootScope) {
    var self = this;

    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
    });

    self.updateInfos = function () {
        TeamService.updateInfos(self.team).then(function (res) {
            Notif.success("Informations mises à jour.")
        });
    }

    return self;
};