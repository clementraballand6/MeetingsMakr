module.exports = function (AppService, $rootScope, $state) {
    var self = this;

    self.credentials = {};

    self.auth = function () {
        $rootScope.showLoader = true;

        AppService.auth(self.credentials).then(function (res) {
            console.log(res);
            $rootScope.showLoader = false;
            $rootScope.user.infos = res;
            $rootScope.user.isLogged = true;
            console.log($rootScope.user);
        }).catch(function (err) {
            $rootScope.showLoader = false;
            console.log(err);
        });
    };

    return self;
};