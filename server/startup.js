Meteor.startup(function() {
  if (Channels.find().count() === 0) {
    Channels.insert({
      channelName: 'slack',
    });

		Channels.insert({
			channelName: 'general'
		});

		Channels.insert({
			channelName: 'random'
		})
  }
})