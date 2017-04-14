module.exports = function ($rootScope) {
    var self = {};

    self.setTitle = function (title) {
        $rootScope.pageTitle = title;
    }

    return self;
};