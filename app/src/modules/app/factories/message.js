module.exports = function () {
    var Message = function (content, received_at, from_contact) {
        this.content = content;
        this.from_contact = from_contact;
        this.received_at = received_at;
    };

    return Message;
};