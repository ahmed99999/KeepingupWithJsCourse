// TOP COMMENT : this file is song file that you can use to initiate new song as many as you can throughout the song Object defined down bellow


// this is an instance function or a factory function that is used to issue a new song each time you use the "new Song"
function Song(name, artist, Album, loved, Released, Awards, Genres, Nominations) {
  // these are the attribues of a song
  this.name = name;
  this.artist = artist;
  this.Album = Album;
  this.loved = loved;
  this.Released = Released;
  this.Awards = Awards;
  this.Genres = Genres;
  this.Nominations = Nominations;
}

// these the values that will be used to identify the first song
var name = "waves";
var artist = "Mr. Probz";
var Album = "The Treatment";
var Released = 2013;
var loved = true;
var Awards = ["Schaal van Rigter"];
var Genres = ["Rhythm and blues", "Soft rock", "hip-hop/Rap"];
var Nominations = [
  "Zorld Music award for world's Best Song",
  "Danish Music Award for International Hit of the Year",
  "World Music Award for World’s Best Video",
  "Grammy Award for Best Remixed Recording, Non-Classical"
];

// initializing the first song
var wzavesSong = new Song(
  name,
  artist,
  Album,
  loved,
  Released,
  Awards,
  Genres,
  Nominations
);

// logging all the attributes of a first song
console.log(wzavesSong.name);
console.log(wzavesSong.artist);
console.log(wzavesSong.Album);
console.log(wzavesSong.loved);
console.log(wzavesSong.Released);
console.log(wzavesSong.Awards);
console.log(wzavesSong.Genres);
console.log(wzavesSong.Nominations);
