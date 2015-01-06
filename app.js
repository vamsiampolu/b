var Contact=require('./contactModel');
var AppView=require('./appView');

var ContactCollectionView=require('./contactCollectionView');
var contactList=new ContactCollectionView();
var mrdoe=new Contact();
console.log(mrdoe.toJSON());
