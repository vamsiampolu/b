var Backbone=require('init');

module.exports=Backbone.Model.extend({
	defaults:{
		name:'John Doe',
		phone:'123 123 12',
		email:'johndoe@gmail.com'/*Google knows all his preferences...*/
	}
});
