Router.route('/', {
	name         : 'home',
	template     : 'home'
	// subscriptions: function (){
	// 	return Meteor.subscribe('userInfoForCurrentUser');
	// }
});

Router.route('/register');
Router.route('/login');
