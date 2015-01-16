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
	}
});

module.exports=view;