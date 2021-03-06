Meteor.publish('messages', function (channelId) {
  return Messages.find({chId: channelId});
});

Meteor.publish('channels', function () {
  return Channels.find();
});

Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "username": 1,
    "services.facebook.id": 1,
    "services.facebook.name": 1,

    "profile.firstName": 1,
    "profile.lastName": 1,
    "profile.familyName": 1,
    "profile.secondName": 1,
    "profile.name": 1,
  }});
});