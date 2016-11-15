"use strict";
var Apple = (function(rottenApple) {
	let songs = rottenApple.getSongs();

///////////- NAV BAR LINKS -////////////
let homeLink = document.getElementById("link-home");
let homeView = document.getElementById("list-music-view");

homeLink.addEventListener("click", function() {
  addView.classList.add("hidden");

  homeView.classList.remove("hidden");
  homeView.classList.add("visible");

});

let addLink = document.getElementById("link-add");
let addView = document.getElementById("add-music-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");

  addView.classList.remove("hidden");
  addView.classList.add("visible");

});

///////////- ADD MUSIC TO ARRAY -////////////
	rottenApple.addSongToArray = function () {
		var songInput = document.getElementById("song-input").value;
		var artistInput = document.getElementById("artist-input").value;
		var albumInput = document.getElementById("album-input").value;

		if (songInput && artistInput && albumInput) {
		songs.push({ 	"Song": songInput,
									"Artist": artistInput,
									"Album": albumInput
		});
		rottenApple.addSongToDom(songInput, artistInput, albumInput);
		rottenApple.setSongs(songs);
		rottenApple.alertSongAdded(songInput);
		rottenApple.eraseInput(songInput, artistInput, albumInput);
	} else {
		document.getElementById("alert-add").innerHTML = "Missing input";
		return;
	}
	};

rottenApple.addSongToDom = function(songInput, artistInput, albumInput) {
	console.log("addSongToDom is running");
	let songName = "<h2 class='songName'>" + songInput + "</h2>";
	let songArtist = "<h3 class='songArtist'>" + artistInput + "</h3>";
	let songAlbum = "<h3 class='songAlbum'>" + albumInput + "</h3>";
	let domInjectSong = document.getElementById("jams");
	domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "<button type='button' class='deleteMe'>DELETE</button>" + "</ul>";
};

rottenApple.alertSongAdded = function(songName) {
	document.getElementById("alert-add").innerHTML = "'"+ songName + "'" + " was added to your playlist";
};

rottenApple.eraseInput = function(songInput, artistInput, albumInput) {
	console.log("yoyoyoyo");
	songInput = "";
	artistInput = "";
	albumInput = "";
};

 return rottenApple;

})(Apple || {});

// Apple.loadSongs(Apple.jsonSongs);
// Apple.loadSongs(rottenApple.jsonSongs); //-----------> Calling Function


