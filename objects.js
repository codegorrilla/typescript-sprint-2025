var printName = function (person) {
  console.log('my name is '.concat(person.first, ' ').concat(person.last));
};
printName({ first: 'Arda', last: 'Guller' });
var dog = { name: 'Elton', age: 1.5 };
//printName({first: 'Mick', last: 'Jagger', age: 47});
var singer = { first: 'Mick', last: 'Jagger', age: 47 };
//if I assign extra properties of an object and declare it in a new variable, singer in this case, then if I use that variable inside the function, no errors given by tsc
printName(singer);
var axis = function (coordinates) {
  return { x: coordinates.x * 2, y: coordinates.y * 2 };
};
function calculatePayout(song) {
  return song.numStreams * 0.0033;
}
function printSong(song) {
  console.log(''.concat(song.title, ' - ').concat(song.artist));
}
var mySong = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 12872221,
  credits: {
    producer: 'Phill Spector',
    writer: 'Alex North',
  },
};
var myEarnings = calculatePayout(mySong);
console.log(myEarnings);
printSong(mySong);
