var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Today We're Believers by Royal Canoe on the album Today We're Believers");
songs.unshift("Unstoppable by Foxy Shazam on the album Foxy Shazam");
// console.log(songs);

var domInjectSong = document.getElementById("jams");

for (var i = 0; i < songs.length; i++) {
var newSongs = songs[i].replace(/[(@*!]/g, "")
.replace(/>/g, "-");
console.log(newSongs);

// var currentSong = newSongs[i];
// debugger;

domInjectSong.innerHTML += "<li class='jam-list-items'>" + "<h4>" + newSongs + "</h4>" + "</li>"
// console.log("inner", domInjectSong.innerHTML);

};