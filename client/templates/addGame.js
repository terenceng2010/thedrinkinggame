
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

