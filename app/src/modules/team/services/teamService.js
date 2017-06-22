module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getTeamMembers = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "teamMembers", {params: {id: id}});
    };

    self.getTeamDetails = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "team", {params: {id: id}});
    }

    self.getAllClubs = function () {
        return $http.get(APP_CONSTANTS.API_PATH + "allClubs");
    }

    self.updateInfos = function (t) {
        var team = angular.copy(t);
        team.settings = JSON.stringify(team.settings);
        console.log(team.settings);
        return $http.put(APP_CONSTANTS.API_PATH + "team", team);
    };

    self.addMember = function (member, club) {
        return $http.post(APP_CONSTANTS.API_PATH + "member", {member: member, club: club})
    }

    return self;
};