define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Atma's Massage";
            config.map([
                {
                    route: ['', 'welcome'],
                    name: 'welcome',
                    moduleId: 'welcome/welcome',
                    nav: true,
                    title: 'Welcome'
                },
                {
                    route: 'new-clients',
                    name: 'new-clients',
                    moduleId: 'newClients/new-clients',
                    nav: true,
                    title: 'New Clients'
                },
                {
                    route: 'packages',
                    name: 'packages',
                    moduleId: 'packages/packages',
                    nav: true,
                    title: 'Specials'
                },
                {
                    route: 'about',
                    name: 'about',
                    moduleId: 'about/about',
                    nav: true,
                    title: 'About'
                }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
