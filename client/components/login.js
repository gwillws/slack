Template.login.events({
  'click .login-button': function(event) {
    event.preventDefault();
    var email = $('.login-email').val();
    var password = $('.login-password').val();
    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        console.log(err.reason);
      } else {
        Router.go('/');
      }
    });
  },
  'click .signup-button': function(event) {
    event.preventDefault();
    Router.go('/signup');
  },
  'click .facebook-login-button': function(event) {
    event.preventDefault();
    Meteor.loginWithFacebook(function(err) {
      if (err) {
        console.log(err.reason);
      } else {
        Router.go('/');
      }
    });
  },
});