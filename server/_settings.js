// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'facebook'});
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '843043975803166',
    secret: '08f8257b04829bf15bbf16e179cc42e2'
  });
});