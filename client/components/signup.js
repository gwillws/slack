Template.signup.events({
  'click .signup-back-button': function() {
    Router.go('login');
  },
  'click .signup-button': function(event) {
    event.preventDefault();
    var username = $('#signup-username').val(),
        email = $('#signup-email').val(),
        password = $('#signup-password').val();

    Accounts.createUser({
      username: username,
      email: email,
      password: password,
    });

    Router.go('home');
  }
})