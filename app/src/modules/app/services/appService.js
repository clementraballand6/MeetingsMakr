module.exports = function ($http, APP_CONSTANTS, $rootScope) {
    var self = this;

    self.auth = function (credentials) {
        return $http.get(APP_CONSTANTS.API_PATH + "login", {params: credentials});
    };

    return self;
};