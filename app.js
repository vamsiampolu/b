var Contact=require('./contactModel');
var AppView=require('./appView');
var ContactCollection=require('./contactCollection');
var ContactCollectionView=require('./contactCollectionView');
var contactList=new ContactCollectionView({
	collection:ContactCollection
});
var mrdoe=new Contact();
console.log(mrdoe.toJSON());
