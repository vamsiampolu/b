var Backbone=require('./init');
var $=require('jquery');
var ContactView=require('./contactModelView');
var ContactCollection=require('./ContactCollection');
//commented...will use it later...
//var actAsPaginatable=require('Backbone.actAs.paginatable')
var view=Backbone.View.extend({
	el:'#display-contacts-view',
	collection:ContactCollection,
	initialize:function initCollectionView(){
		console.log("Inside collection view");
		this.listenTo(this.collection,'add',this.addContact);	
	},
	addContact:function addContact(model){
		console.log("Inside addContact method of collection view");
		var m_view=new ContactView({model:model});
		var m_$el= m_view.render().$el;
		console.log(m_$el);
		this.$el.append(m_$el);
	}
});

module.exports=view;