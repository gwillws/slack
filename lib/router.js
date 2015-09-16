Router.configure({
  // layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.map(function() {
  this.route('home', { layoutTemplate: 'appBody', path: '/'});
  this.route('login', { layoutTemplate: 'appLogin', path: '/login' });
  this.route('signup', { layoutTemplate: 'appLogin', path: '/signup'});
});