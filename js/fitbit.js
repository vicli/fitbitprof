MenuItems = new Mongo.Collection("menuitems");

if (Meteor.isClient) {
  // counter starts at 0
  if (MenuItems.find({}).count() === 0) {
       
  }
  Template.side_panel.helpers({
    items: function(){
      return MenuItems.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  
  });
}
