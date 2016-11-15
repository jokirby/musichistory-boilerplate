"use strict";

var Apple = (function(rottenApple) {
	let songs = [];


  rottenApple.loadMoreSongs = function() {
    $.ajax({
      url: "songs-json/more-songs.JSON"
      }).done(function(songsData) {
        rottenApple.jsonMoreSongs(songsData.Songs);
      });
	};

  rottenApple.jsonMoreSongs = function(songsData) {
  	// console.log("MORE jsonSongs is running");
    for (var key in songsData) {
      songs.push(songsData[key]);
    }
      rottenApple.outputToWindow(songs);
  };

  rottenApple.getMoreSongs = function() {
  	return songs;
  };

  rottenApple.setMoreSongs = function(newSongs) {
  	songs = newSongs;
  };

 return rottenApple;

})(Apple || {});
