Router.route('/', {
	name: 'home',
	template: 'home',
	onBeforeAction: function() {
		var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
	}
});

Router.route('/register');
Router.route('/login');
