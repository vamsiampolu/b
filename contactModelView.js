var Backbone=require('./init');
var Contact=require('./contactModel');
var $=require('jquery');
var template=require('./contactCard.hbs');
var ContactCollection=require('./contactCollection');
var view=Backbone.View.extend({
	model:Contact,
	className:'list-group-item',
	initialize:function(){
		this.render();
	},
	render:function(){
		console.log('Inside contact view render method');
		var html=template(this.model.toJSON());
		this.$el.html(html);
		return this;
	},
	removeContact:function removeContact(){
		console.log("Inside removeContact function");
		this.model.destroy();
		this.remove();
	},
	events:{
		'click .contact-delete':'removeContact'
	}
});

module.exports=view;