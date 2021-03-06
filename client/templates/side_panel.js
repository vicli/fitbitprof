Template.side_panel.onCreated( function() {
	this.devices = this.subscribe('devices');
});

Template.side_panel.helpers({
	items: function(){
	 	return MenuItems.find({});
	},
	devices: function(){
		console.log("Deivces", Devices.find({}));
		return Devices.find({});
	}
});

Template.side_panel.events({
	'click .side-panel-contents li': function(event, template) {
	  var newTab = $( event.target ).closest( "li" );
	  currentTab.set(newTab.data("template"));

	  var newActive = $(event.target).closest("a");
	  $(".active").removeClass( "active" )
	  newActive.addClass("active");
	},
	
	'click .logout': function(e) {
		e.preventDefault();
		Meteor.logout(function(error){
			if (error){
				console.log("Error in logging out:", error);
			} else {
				Object.keys(Session.keys).forEach(function(key){
        			Session.set(key, undefined);
		    	});
		    	Session.keys = {}
				Router.go('login');
			}
		});
	}
});

Template.side_panel_item.onRendered(function () {
	// We only want to set active state when it hasnt been done yet.
	if(!activeSet.get()){
	  $("#personal_info").addClass("active");
	  activeSet.set(true);
	}
})

Template.panels.onCreated(function(){
	currentTab = new ReactiveVar("personal_info");
	activeSet  = new ReactiveVar(false);
})

Template.panels.helpers({
	tab: function() {
		console.log("current tab", currentTab.get());
		return currentTab.get();
	},
	template: function() {
		console.log("in personal info");
		return 'personal_info';
	}
});

Template.personal_info.onCreated(function(){
	mainPanel = Template.instance();
})

Template.side_panel_item.events({
	'click': function(event) {
		console.log("Clicked", event.target);
	}
})