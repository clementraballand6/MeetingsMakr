module.exports = function () {
    var self = {};

    self.success = function (msg) {
        $.notify(msg, 'success')
    };

    self.error = function (msg) {
        $.notify(msg, 'error')
    };

    self.info = function (msg) {
        $.notify(msg, 'info')
    };

    self.warn = function (msg) {
        $.notify(msg, 'warn')
    };

    return self;
};