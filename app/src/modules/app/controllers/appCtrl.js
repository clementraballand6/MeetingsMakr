module.exports = function (AppService, $rootScope, $state, $window, Notif) {
    var self = this;

    self.credentials = {};

    self.auth = function (loader) {
        loader ? $rootScope.showLoader = true : '';
        AppService.auth(self.credentials).then(function (res) {
            loader ? $rootScope.showLoader = false : '';
            $rootScope.isLogged = true;
            $window.localStorage.setItem("mail", JSON.stringify(self.credentials.mail));
            $window.localStorage.setItem("password", JSON.stringify(self.credentials.password));
            $state.go("dashboard");
        }).catch(function (err) {
            loader ? $rootScope.showLoader = false : '';
            console.log(err);
        });
    };

    self.disconnect = function () {
        $window.localStorage.removeItem("mail");
        $window.localStorage.removeItem("password");
        $rootScope.isLogged = false;
        $state.go("login");
    };

    self.updateUserInfos = function () {
        AppService.updateUserInfos($rootScope.userInfos).then(function (res) {
            Notif.info("Informations mises à jours.");
        });
    };

    if ($rootScope.isLogged) {
        AppService.auth({
            mail: JSON.parse($window.localStorage.getItem('mail')),
            password: JSON.parse($window.localStorage.getItem('password'))
        }).then(AppService.storeUserInfos);
        AppService.storeClubs();
    }

    return self;
};