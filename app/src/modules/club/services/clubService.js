module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getClubDetails = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "club", {params: {id: id}});
    };

    return self;
};