
Template.AddGame.events(
  {
    "click .getCurrentLocation":function(event,template){
     
    navigator.geolocation.getCurrentPosition(function(position) {
      

        
        $("input[name='coordinate.lat']").val(position.coords.latitude);       
        $("input[name='coordinate.lng']").val(position.coords.longitude);
    });
      
    }
    
  }
  
);

Template.AddGame.rendered = function () {

};

Template.AddGame.helpers({
  
  isLogin: function(){
    if(Meteor.user()){
         console.log("User is logged in");
      return true;
    }else{
       console.log("User is not logged in");
      return false;
    }
  }
  
  
});