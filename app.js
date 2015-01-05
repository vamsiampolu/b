var $=require('jquery');
var semanticUi=require('semantic-ui');
$("#myButton").on("click",function(){
	console.log("sidebar button clicked");
	console.log($.fn.siebar);
	$('#mySidebar').sidebar('toggle');
});

/*now to test the working of bootstrap,build a navbar with css and a menu item that opens a modal*/

