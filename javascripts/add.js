///////////- NAV BAR LINKS -////////////
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("list-music-view");

homeLink.addEventListener("click", function() {
  addView.classList.add("hidden");

  homeView.classList.remove("hidden");
  homeView.classList.add("visible");

});

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-music-view");

addLink.addEventListener("click", function() {
  homeView.classList.add("hidden");

  addView.classList.remove("hidden");
  addView.classList.add("visible");

});

///////////- ADD MUSIC TO ARRAY -////////////
document.getElementById("add-button")
	.addEventListener("click", addSongToArray);

	function addSongToArray () {
		var songInput = document.getElementById("song-input").value;
		var artistInput = document.getElementById("artist-input").value;
		var albumInput = document.getElementById("album-input").value;
		// console.log("albumInput", albumInput, typeof albumInput);

		songs.push({ 	"Song": songInput,
									"Artist": artistInput,
									"Album": albumInput
		});
		addSongToDom(songInput, artistInput, albumInput);
	};

function addSongToDom (songInput, artistInput, albumInput) {
	var songName = "<h2 class='songName'>" + songInput + "</h2>";
	var songArtist = "<h3 class='songArtist'>" + artistInput + "</h3>"
	var songAlbum = "<h3 class='songAlbum'>" + albumInput + "</h3>"
	var domInjectSong = document.getElementById("jams");
	domInjectSong.innerHTML += "<ul class='jam-list-items'>" + "<li>" + songName + "</li>" + "<br>" + "<li>" + songArtist + "</li>" + " | " + "<li>" + songAlbum + "</li>" + "</ul>";
}


