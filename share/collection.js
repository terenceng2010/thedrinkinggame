DRINKS =['Box Wine','Beer','Red Wine','Sake','Whiskey','Soft Drinks'];

Games = new Mongo.Collection('games');

Games.attachSchema(new SimpleSchema({
	
	name:{
		type:String
	},
	description:{
		type:String
	},
	location:{
		type:[Number],
		decimal:true,
		autoform:{
			type:'map',
			afFieldInput:{
				mapType:'roadmap',
				geolocation:true,
				autolocate:true,
				searchBox:false,
				zoom:14
			}
			
		}
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

