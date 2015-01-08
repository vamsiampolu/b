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
		this.listenTo(this.model,'change',this.render);
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
	askForUpdate:function()
	{
		//triggers an event which passes the model to the event handling function...
		//called each time the update button is clicked...
		this.trigger('update_requested',this.model);		
	},
	updateContact:function(data){
		this.model.set(data);
	},
	events:{
		'click .contact-actions .btn-remove':'removeContact',
		'click .contact-actions .btn-edit':'askForUpdate'
	}
});

module.exports=view;