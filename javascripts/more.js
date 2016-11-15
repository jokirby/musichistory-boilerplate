"use strict";

var Apple = (function(rottenApple) {
	let songs = [];

	rottenApple.loadMoreSongs = function(callBack) {
		console.log("MORE loadSongs is running");
		let request = new XMLHttpRequest();
		request.open("GET", "songs-json/more-songs.JSON");
		request.send();

		request.addEventListener("load", function() {
			let songsData = JSON.parse(this.responseText).Songs;
			callBack(songsData);
		});
	};

  rottenApple.jsonMoreSongs = function(songsData) {
  	console.log("MORE jsonSongs is running");
    for (var key in songsData) {
      songs.push(songsData[key]);
    }
      rottenApple.outputToWindow(songs);
  };

  // rottenApple.outputToWindow = function(songs) {
  // 	console.log("MORE outputToWindow is running");
  // 	let domInjectSong = document.getElementById("jams");
  // 	for (var i = 0; i < songs.length; i++) {
		// let currentSong = songs[i];
		// let songName = "<h2 class='songName'>" + currentSong.Song + "</h2>";
		// let songArtist = "<h3 class='songArtist'>" + currentSong.Artist + "</h3>";
		// let songAlbum = "<h3 class='songAlbum'>" + currentSong.Album + "</h3>";
		// domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "<button type='button' class='deleteMe'>DELETE</button>" + "</ul>";
  // 	}
  // };

  rottenApple.getMoreSongs = function() {
  	return songs;
  };

  rottenApple.setMoreSongs = function(newSongs) {
  	songs = newSongs;
  };

 return rottenApple;

})(Apple || {});
