module.exports = function (APP_CONSTANTS, $http) {
    var self = this;

    self.getPlayer = function (id) {
        return $http.get(APP_CONSTANTS.API_PATH + "player", {params: {id: id}});
    };

    return self;
};