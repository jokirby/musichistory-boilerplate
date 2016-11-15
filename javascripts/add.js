"use strict";
var Apple = (function(rottenApple) {
	let songs = rottenApple.getSongs();

///////////- NAV BAR LINKS -////////////
let homeLink = $("#link-home");
let homeView = $("#list-music-view");

homeLink.click( function() {
  addView.addClass("hidden");

  homeView.removeClass("hidden");
  homeView.addClass("visible");
});

let addLink = $("#link-add");
let addView = $("#add-music-view");

addLink.click( function() {
  homeView.addClass("hidden");

  addView.removeClass("hidden");
  addView.addClass("visible");

});

///////////- ADD MUSIC TO ARRAY -////////////
	rottenApple.addSongToArray = function () {
		var songInput = $("#song-input").val();
		var artistInput = $("#artist-input").val();
		var albumInput = $("#album-input").val();

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
		$("#alert-add").innerHTML = "Missing input";
		return;
	}
	};

rottenApple.addSongToDom = function(songInput, artistInput, albumInput) {
	// console.log("addSongToDom is running");
	let songName = "<h2 class='songName'>" + songInput + "</h2>";
	let songArtist = "<h3 class='songArtist'>" + artistInput + "</h3>";
	let songAlbum = "<h3 class='songAlbum'>" + albumInput + "</h3>";
	let domInjectSong = document.getElementById("jams");
	domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "<button type='button' class='deleteMe'>DELETE</button>" + "</ul>";
};

rottenApple.alertSongAdded = function(songName) {
	$("#alert-add").html("'"+ songName + "'" + " was added to your playlist");
};

rottenApple.eraseInput = function(songInput, artistInput, albumInput) {
	// console.log("yoyoyoyo");
	songInput = "";
	artistInput = "";
	albumInput = "";
};

 return rottenApple;

})(Apple || {});

// Apple.loadSongs(Apple.jsonSongs);
// Apple.loadSongs(rottenApple.jsonSongs); //-----------> Calling Function


