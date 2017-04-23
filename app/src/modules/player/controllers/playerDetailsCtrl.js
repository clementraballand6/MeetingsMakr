module.exports = function (AppService, PlayerService, $stateParams, Notif, $rootScope) {
    var self = this;

    PlayerService.getPlayer($stateParams.id).then(function (res) {
        self.player = res.data;
    });

    return self;
};