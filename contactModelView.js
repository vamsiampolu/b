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
		//called each time the update button is clicked
		this.onUpdateRequested(this.model);	
	},
	updateContact:function(data){
		this.model.set(data);
	},
	onUpdateRequested:function onUpdateRequested(model)
	{
		console.log("An update has been requested on the model here");
		console.log(model.toJSON());
		var $modal =$('#contact-update-view');
		var $form = $('#contact-update-view form');
		console.log($form);
		var onEachInput = function onEachInput(){
			var dataMapping={
				text:'name',
				tel:'phone',
				email:'email'
			};
			var key=dataMapping[$(this).attr('type')];
			var value=$(this).val();
			console.log(key+" : "+value);
			model.set(key,value);
			$(this).val('');
		};

		var onFormSubmit = function onFormSubmit(event){
			console.log(event);
			event.preventDefault();//this should take effect...
			console.log("Update has been submitted");
			$form.find('input').each(onEachInput);
			$modal.modal('hide');
		};
		
		$form.find('button').on('click',onFormSubmit);
	},
	events:{
		'click .contact-actions .btn-remove':'removeContact',
		'click .contact-actions .btn-edit':'askForUpdate'
	}
});

module.exports=view;