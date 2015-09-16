// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({service: 'facebook'});
  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '484782348346559',
    secret: 'd0cf418e5d3506c69cf73a587b3ae412'
  });
});