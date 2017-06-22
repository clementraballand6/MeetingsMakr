module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getClubEvents = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "masterClubEvents", {params: {id: id}});
    };

    return self;
};