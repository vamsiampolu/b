var Backbone=require('./init');
var $=require('jquery');
var ContactView=require('./contactModelView');

//commented...will use it later...
//var actAsPaginatable=require('Backbone.actAs.paginatable')
var view=Backbone.View.extend({
	el:'#display-contacts-view',
	initialize:function initCollectionView(){
		console.log("Inside collection view");
		this.listenTo(this.collection,'add',this.addContact);	
	},
	addContact:function addContact(model){
		console.log("Inside addContact method of collection view");
		var m_view=new ContactView({model:model});
		m_view.on('update_requested',this.onUpdateRequested);
		var m_$el= m_view.render().$el;
		console.log(m_$el);
		this.$el.append(m_$el);
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
	}
});

module.exports=view;