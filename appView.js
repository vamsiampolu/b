var Backbone=require('./init');
var $=require('jquery');
var Contact=require('./contactModel.js');
var ContactCollection=require('./contactCollection');
//var backboneQuery=require('backbone-query').QueryCollection;
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
			$(this).val('');
		});
		data.visible=true;
		var model=new Contact(data);
		console.log(model.toJSON());
		ContactCollection.add(model);
		
	},
	searchCollection:function searchCollection(){
		console.log("Inside the search collection method");
		var query = $('.search-container input').val();
		/*
			filter all the data from the collection,how to make everything else hidden??
		*/
		var models=ContactCollection.query({
			name:{
				$likel:query
			}
		});
		console.log(models);
	},
	events:{
		'click #contact-create-form button':'submitForm'
		//'click .search-container .input-group-addon':'searchCollection'
	}
});

module.exports=new appView();