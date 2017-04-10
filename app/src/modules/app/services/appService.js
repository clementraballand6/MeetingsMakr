module.exports = function ($http, APP_CONSTANTS, $rootScope) {
    var self = this;

    self.auth = function (credentials) {
        return $http.get(APP_CONSTANTS.API_PATH + "login", {params: credentials});
    };

    self.getUserInfos = function () {
        return $http.get(APP_CONSTANTS.API_PATH + "userInfos");
    };

    self.serverHasAuth = function () {
        return $http.get(APP_CONSTANTS.API_PATH + "isAuth");
    };

    self.updateUserInfos = function (newInfos) {
        return $http.put(APP_CONSTANTS.API_PATH + "user", newInfos);
    };

    self.storeUserInfos = function () {
        self.getUserInfos().then(function (res) {
            $rootScope.userInfos = res.data;
        })
    };

    self.storeClubs = function () {
        $http.get(APP_CONSTANTS.API_PATH + "clubs").then(function (res) {
            self.clubs = res.data;
        })
    };

    return self;
};