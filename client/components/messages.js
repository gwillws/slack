Template.messages.onCreated(function() {
	var self = this;
  self.autorun(function() {
  	self.subscribe('messages', Session.get('selectedChannel'));
  	self.subscribe('allUsernames');
  });
  
});

Template.messages.helpers({
  messages: function() {
    return Messages.find();
  }
});