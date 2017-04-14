module.exports = function (AppService, TeamService, $stateParams, Notif) {
    var self = this;
    self.settings = [];

    TeamService.getTeamDetails($stateParams.id).then(function (res) {
        self.team = res.data;
        self.settings = self.team.settings || [];
    });

    self.hasSetting = function (setting) {
        return self.settings.indexOf(setting) > -1;
    }

    self.toggleSetting = function (setting) {
        if (self.hasSetting(setting)) {
            self.settings.splice(self.settings.indexOf(setting), 1);
        } else {
            self.settings.push(setting);
        }
        self.team.settings = self.settings;
        console.log(self.team);
        TeamService.updateInfos(self.team);
    }

    return self;
};