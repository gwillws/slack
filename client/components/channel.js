Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
  	var channelSub = self.subscribe('channels');

  	if (channelSub.ready()) {
  		var defaultChannel = Channels.findOne({channelName: 'slack'});

			Session.set('selectedChannel', defaultChannel._id);
      Session.set('selectedChName', defaultChannel.channelName);
  	}
  });
});

Template.channel.onRendered(function() {
	
})

Template.channel.helpers({
  channels: function() {
    return Channels.find();
  },
  active: function() {
  	return Session.equals('selectedChannel', this._id) ? 'active' : '';
  }
});

Template.channel.events({
	'click .channel': function(e) {
		Session.set('selectedChannel', this._id);
    Session.set('selectedChName', this.channelName);
	}
});