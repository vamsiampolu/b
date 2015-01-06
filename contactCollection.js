var Backbone=require('./init');
var Contact=require('./contactModel');

var Collection=Backbone.Collection.extend({
	model:Contact,
	initialize:function initContactCollection(){
		console.log("Contact Collection has been created");
	}
});

module.exports=Collection;