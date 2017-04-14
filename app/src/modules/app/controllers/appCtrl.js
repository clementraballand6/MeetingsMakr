module.exports = function (AppService, $rootScope, $state, $window, Notif, App) {
    var self = this;

    self.credentials = {};

    if ($state.current.name === "editUser") App.setTitle("Mes informations");

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

    return self;
};