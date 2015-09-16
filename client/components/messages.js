Template.messages.onCreated(function() {
  this.subscribe('messages');
  this.subscribe('allUsernames');
});

Template.messages.helpers({
  messages: function() {
    return Messages.find();
  }
});