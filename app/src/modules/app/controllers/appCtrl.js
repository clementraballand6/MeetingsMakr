module.exports = function (AppService, $rootScope, $state, $window) {
    var self = this;

    self.credentials = {};

    self.auth = function () {
        $rootScope.showLoader = true;

        AppService.auth(self.credentials).then(function (res) {
            $rootScope.showLoader = false;
            $rootScope.user.infos = res.data;
            $rootScope.user.isLogged = true;
            $window.localStorage.setItem("user", JSON.stringify(res.data));
            $state.go("dashboard");
        }).catch(function (err) {
            $rootScope.showLoader = false;
            console.log(err);
        });
    };

    return self;
};