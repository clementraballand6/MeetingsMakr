module.exports = function ($state, AppService, $scope, $timeout) {
    var self = this;

    self.contacts = AppService.contacts;
    console.log(self.contacts);
    self.tabs = [];

    for (var i = 0; i < $state.get().length; i++) {
        if ($state.get()[i].data && $state.get()[i].data.isTab) self.tabs.push($state.get()[i]);
    }

    self.currentTab = "Inbox";
    return self;
};