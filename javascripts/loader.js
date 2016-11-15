"use strict";

var Apple = (function(rottenApple) {
	let songs = [];

  $.ajax({
    url: "songs-json/initial-songs.JSON"
    }).done(function(songsData) {
      rottenApple.jsonSongs(songsData.Songs);
    });

  rottenApple.jsonSongs = function(songsData) {
    for (var key in songsData) {
      songs.push(songsData[key]);
    }
      rottenApple.outputToWindow(songs);
  };

  rottenApple.outputToWindow = function(songs) {
  	let domInjectSong = document.getElementById("jams");
  	for (var i = 0; i < songs.length; i++) {
		let currentSong = songs[i];
		let songName = "<h2 class='songName'>" + currentSong.Song + "</h2>";
		let songArtist = "<h3 class='songArtist'>" + currentSong.Artist + "</h3>";
		let songAlbum = "<h3 class='songAlbum'>" + currentSong.Album + "</h3>";
		domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "<button type='button' class='deleteMe'>DELETE</button>" + "</ul>";
  	}
  };

  rottenApple.getSongs = function() {
  	return songs;
  };

  rottenApple.setSongs = function(newSongs) {
  	songs = newSongs;
  };

 return rottenApple;

})(Apple || {});

// Apple.loadSongs(Apple.jsonSongs);
