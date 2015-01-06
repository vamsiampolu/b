var Backbone=require('./init');
var $=require('jquery');
var Contact=require('./contactModel.js');
var ContactCollection=require('./contactCollection');
var collection=new ContactCollection();
var appView=Backbone.View.extend({
	el:'#app',
	initialize:function initAppView(){
		console.log('Inside initialize');
		this.$createForm=this.$('#contact-create-form');
	
	},
	submitForm:function submitCreateForm(e){
		e.preventDefault();
		var data={};
		$('#contact-create-form').find('input').each(function(){
			var dataMapping={
				text:'name',
				tel:'phone',
				email:'email'
			};
			var key=dataMapping[$(this).attr('type')];
			data[key]=$(this).val(); 
		});
		var model=new Contact(data);
		console.log(model.toJSON());
		collection.add(model);
	},
	events:{
		'click #contact-create-form button':'submitForm'
	}
});

module.exports=new appView();