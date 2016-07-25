define(["require", "exports"], function (require, exports) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
            this.heading = "Welcome to Atma's Massage!";
            this.phoneNumber = '425-292-0044';
            this.underConstruction = 'This site is under construction. Please bear with us while we work...';
            this.serving = "Serving the Snoqualmie Valley since 1997";
            this.moreInfo = "For more information call:";
        }
        Welcome.prototype.canDeactivate = function () {
            return true;
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

//# sourceMappingURL=welcome.js.map
