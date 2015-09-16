// Router.configure({
//   // layoutTemplate: 'appBody',
//   notFoundTemplate: 'notFound'
// });

// Router.map(function() {
//   this.route('home', { layoutTemplate: 'appBody', path: '/'});
//   this.route('login', { layoutTemplate: 'appLogin', path: '/login' });
//   this.route('signup', { layoutTemplate: 'appLogin', path: '/signup'});
// });

Router.configure({
  // layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound',
  onBeforeAction: function() {
    if (Meteor.user()) {
      Router.go('/');
    } else if (Meteor.loggingIn()) {
      Router.go('/');
    } else {
      Router.go('/login');
    }
  }
});

Router.route('/', {
  name: 'home',
  template: 'home',
  layoutTemplate: 'appBody'
});

Router.route('/login', {
  path: '/login',
  name: 'login',
  template: 'login',
  layoutTemplate: 'appLogin'
});

Router.route('/signup', {
  path: '/signup',
  name: 'signup',
  template: 'signup',
  layoutTemplate: 'appLogin'
});