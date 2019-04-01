// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.lenght; i++ ) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}
