Router.configure({
  layoutTemplate: 'appBody',
  notFoundTemplate: 'notFound'
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('login', { layoutTemplate: null, path: '/login' });
});