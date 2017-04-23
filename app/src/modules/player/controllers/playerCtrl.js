module.exports = function (PlayerService, $stateParams) {
    var self = this;
    self.from = $stateParams.from;

    PlayerService.getPlayer($stateParams.id).then(function (res) {
        self.player = res.data;
    });

    return self;
};