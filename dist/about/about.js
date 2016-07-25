define(["require", "exports"], function (require, exports) {
    "use strict";
    var About = (function () {
        function About() {
            this.heading = 'About Atma';
        }
        About.prototype.activate = function () {
            return "Hello, Atmaji!";
        };
        return About;
    }());
    exports.About = About;
});

//# sourceMappingURL=about.js.map
