"use strict"; 
var Apple = (function(rottenApple) {

//--------------------------- EVENT LISTNERS -------------------------------//

//---- Delete \ 
document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.parentElement.tagName.toLowerCase() === "ul") {
    event.target.parentElement.remove();
  }
});

//---- Add Song \
document.getElementById("add-button")
	.addEventListener("click", function () {rottenApple.addSongToArray();});

//---- More \
var moreButton = document.getElementById("more-button");
moreButton.addEventListener("click", function() {(rottenApple.callMore());});

rottenApple.callMore = function() {
	rottenApple.loadMoreSongs(rottenApple.jsonMoreSongs);
	moreButton.disabled = true;
	moreButton.style.visibility='hidden';
};

 return rottenApple;

})(Apple || {});