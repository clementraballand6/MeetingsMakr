module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getEvent = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "event", {params: {id: id}});
    };

    self.getClubEvents = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "clubEvents", {params: {id: id}});
    };

    self.getAllMeets = function () {
        return $http.get(APP_CONSTANTS.API_PATH + "meets");
    };

    self.addEvent = function (event) {
        return $http.post(APP_CONSTANTS.API_PATH + "event", event);
    };

    self.getMasterClubEvents = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "masterClubEvents", {params: {id: id}});
    };

    self.updateEvent = function (newInfos) {
        return $http.put(APP_CONSTANTS.API_PATH + "event", newInfos);
    };

    return self;
};