module.exports = function (AppService) {
    var self = this;

    self.clubs = AppService.clubs;

    console.log(self.clubs);
    return self;
};