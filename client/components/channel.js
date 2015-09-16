Template.channel.onCreated(function() {
  this.subscribe('channels');
});

Template.channel.helpers({
  channels: function() {
    return Channels.find();
  }
})