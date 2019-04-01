// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var endBand = [];
function theBeatlesPlay(musicians, instruments) {
  for(var i = 0; i < musicians.lenght; i++ ) {
    for(var j = 0; j < instruments[i].lenght; j++){
      console.log(musicians[i] + "plays " + instruments[i][j])
    }
  }
}