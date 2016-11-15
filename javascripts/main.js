"use strict"; 
var Apple = (function(rottenApple) {

//--------------------------- EVENT LISTNERS -------------------------------//

//---- Delete \ 
$("body").click( function(event) {
  if (event.target.parentElement.tagName.toLowerCase() === "ul") {
    event.target.parentElement.remove();
  }
});

//---- Add Song \
$("#add-button").click( function () {rottenApple.addSongToArray();});

//---- More \
var moreButton = $("#more-button");
moreButton.click( function() {(rottenApple.callMore());});

rottenApple.callMore = function() {
	rottenApple.loadMoreSongs();
	moreButton.prop('disabled', true);
	moreButton.hide();
};

 return rottenApple;

})(Apple || {});