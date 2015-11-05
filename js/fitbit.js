MenuItems = new Mongo.Collection("menuitems");

if (Meteor.isClient) {

  /* SIDE PANEL HELPERS */
  Template.side_panel.helpers({
    items: function(){
      return MenuItems.find({});
    }
  });

  Template.panels.onCreated(function(){
    currentTab = new ReactiveVar("personal_info");
  })

  Template.panels.helpers({
    tab: function() {
      console.log("Tab", currentTab.get());
      return currentTab.get();
    },
    template: function() {
      return 'personal_info';
      // console.log("oh helllo");
    }
  });

  Template.side_panel.events({
    'click .side-panel-contents li': function(event, template) {
      var newTab = $( event.target ).closest( "li" );
      currentTab.set(newTab.data("template"));
    }
  })

  Template.personal_info.onCreated(function(){
    mainPanel = Template.instance();
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  
  });
}
