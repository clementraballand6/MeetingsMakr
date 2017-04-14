module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getTeamMembers = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "teamMembers", {params: {id: id}});
    };

    self.getTeamDetails = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "team", {params: {id: id}});
    };

    self.updateInfos = function (t) {
        var team = angular.copy(t);
        team.settings = JSON.stringify(team.settings);
        console.log(team.settings);
        return $http.put(APP_CONSTANTS.API_PATH + "team", team);
    };

    return self;
};