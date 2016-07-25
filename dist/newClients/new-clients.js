define(["require", "exports"], function (require, exports) {
    "use strict";
    var NewClients = (function () {
        function NewClients() {
            this.heading = 'New Client Specials';
        }
        NewClients.prototype.activate = function () {
            return "Hello, Atmaji!";
        };
        return NewClients;
    }());
    exports.NewClients = NewClients;
});

//# sourceMappingURL=new-clients.js.map
