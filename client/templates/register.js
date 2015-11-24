  /* REGISTRATION FUNCTIONS */
Template.register.onRendered(function() {
  $('.register').validate({
    submitHandler: function() {
      var email = $('[name=email]').val();
      var password = $('[name=password]').val();
      Accounts.createUser({
        email: email,
        password: password
      }, function(error){
        if(error) {
          if(error.reason == "Email already exists."){
              validator.showErrors({
                  email: "That email already belongs to a registered user."   
              });
          } else {
            console.log("Error registering: ", error.reason);
          }
        } else{
          UserInfo.insert({
            'user_id': Meteor.userId()
          });
          Router.go('home');
        }
      });
    }
  });
});
