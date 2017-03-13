module.exports = function (AppService, $rootScope, $state) {
    var self = this;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.current = toState;
    });

    return self;
};