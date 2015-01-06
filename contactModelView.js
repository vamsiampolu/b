var Backbone=require('./init');
var Contact=require('./contactModel');
var $=require('jquery');
var template=require('./contactCard.hbs');
var view=Backbone.View.extend({
	model:Contact,
	className:'list-group-item',
	initialize:function(){
		console.log('Inside contact model view');
		this.render();
	},
	render:function(){
		console.log('Inside contact view render method');
		var html=template(this.model.toJSON());
		this.$el.html(html);
		console.log(this.$el.html());
		return this;
	}
});

module.exports=view;