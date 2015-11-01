DRINKS =['Box Wine','Beer','Red Wine','Sake','Whiskey','Soft Drinks'];

GeocoordsSchema = new SimpleSchema({
  lng: {
    type : Number,
    decimal: true,
    min: -180,
    max: 180
  }, 
  lat: {
    type : Number,
    decimal: true,
    min: -90,
    max: 90
  }
});

Games = new Mongo.Collection('games');

Games.attachSchema(new SimpleSchema({
	
	name:{
		type:String
	},
	description:{
		type:String
	},
	coordinate:{
		type:GeocoordsSchema
	},
	drinks:{
		type: [String]
	},
	createAt:{
		type: Date,
		autoValue:function(){
			return new Date;
		}
	},
	publicGame:{
		type: Boolean
	}
	
	
			
	
}));

