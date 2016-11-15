"use strict";

var songs = [
	{
		"Song": "Exodus of the Year",
		"Artist": "Royal Canoe",
		"Album": "Today We're Believers"
	},

	{
		"Song": "1936",
		"Artist": "Phox",
		"Album": "Phox"
	},

	{
		"Song": "Under Pressure",
		"Artist": "Queen",
		"Album": "Live at the Rainbow '74"
	},

];

function toDom () {
for (var i = 0; i < songs.length; i++) {
	var currentSong = songs[i];
	var songName = "<h2 class='songName'>" + currentSong.Song + "</h2>";
	var songArtist = "<h3 class='songArtist'>" + currentSong.Artist + "</h3>";
	var songAlbum = "<h3 class='songAlbum'>" + currentSong.Album + "</h3>";
	var domInjectSong = document.getElementById("jams");
	domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "</ul>";
	}
}

