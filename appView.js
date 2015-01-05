var Backbone=require('./init');
module.exports=Backbone.View.extend({
	el:'#app',
	initialize:function initAppView(){
		console.log('Inside initialize');
		this.$createForm=this.$('#contact-create-form');
		console.log(this.$createForm);
	},
	isValid:function isValid(){
		console.log("Inside isValid");
		console.log($(this));
		$(this).is(':invalid').addClass('has-error');
	},
	events:{
		'#contact-create-form input blur':'isValid'
	}
});