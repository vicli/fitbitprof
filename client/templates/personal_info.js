Template.personal_info.onCreated( function(){
	this.userInfo = this.subscribe('userInfo');
});

Template.personal_info.helpers({

	// we use the subscription helper to only load the personal_info form when the userinfo has loaded
	// this ensures that we can prepopulate the fields with known variables.
	subscription: function() {
		return Template.instance().userInfo.ready();
	},

	userInfo: function() {
		Session.set("userInfoId", UserInfo.find({}).fetch()[0]._id);
		return UserInfo.find({}).fetch()[0];
	}
});

Template.personal_info.events({
	// this effectively allows us to save as soon as a user changes a form field
	'change input, change select, change textarea' : function(event) {
		var obj = {};
      	obj[event.target.name] = event.target.value;
		var userInfo = Session.get("userInfoId");
		UserInfo.upsert({_id: userInfo}, {$set: obj});
	}
})