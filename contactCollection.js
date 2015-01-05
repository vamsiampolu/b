var Backbone=require('./init');
var Contact=require('./contactModel');
var Collection=Backbone.Collection.extend({
	model:Contact,
	initialize:function initContactCollection(){
		console.log("Contact Collection has been created");
		this.on('add',function(models){
			console.log("New contacts have been added");
			console.log(models);
		});
	}
});

module.exports=new Collection();