import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = `Atma's Massage`;
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
  }
}
