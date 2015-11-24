Template.personal_info.helpers({
	userInfo: function(){
		var userInfo = UserInfo.findOne({user_id: Meteor.userId()});
		if(userInfo){
			Session.set('userInfoId', userInfo._id)
			return userInfo;
		}
	}
})

Template.personal_info.events({
	'change input, change select, change textarea' : function(event) {
		var obj = {};
      	obj[event.target.name] = event.target.value;
		var userInfo = Session.get("userInfoId");
		console.log("obj", obj);
		UserInfo.update({_id: userInfo}, {$set: obj});
		console.log("user info", UserInfo.findOne({user_id: Meteor.userId()}))
	}
})