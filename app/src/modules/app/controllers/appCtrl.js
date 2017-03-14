module.exports = function (AppService, $rootScope, $state) {
    var self = this;

    $rootScope.user = {
        isLogged: false
    };

    return self;
};