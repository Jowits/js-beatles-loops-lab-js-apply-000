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
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var arr=[];
  var i = 0;
  while(facts.length > i){
    arr.push(`${facts[i]}!!!`)
     i++
  }
  return arr
}
  
  johnLennonFacts(facts);