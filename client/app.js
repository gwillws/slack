// Accounts.ui.config({
//     passwordSignupFields: 'USERNAME_AND_EMAIL'
// })

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	
	if (typeof user === "undefined") {
		return "Anonymous";
	}

	if (typeof user.username !== "undefined") {
		return user.username;
	}
	
	if (user.services) {
		if (typeof user.services.facebook !== "undefined") {
			return user.services.facebook.name;
		}
	}

	return user.username;
});