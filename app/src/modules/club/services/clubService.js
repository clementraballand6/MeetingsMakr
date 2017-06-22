module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getClubDetails = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "club", {params: {id: id}});
    };

    self.addClub = function (club) {
        return $http.post(APP_CONSTANTS.API_PATH + "masterClub", club);
    }

    self.removeClub = function (id) {
        return $http.delete(APP_CONSTANTS.API_PATH + "club/" + id);
    }

    return self;
};