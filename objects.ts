const printName = (person: { first: string; last: string }): void => {
  console.log(`my name is ${person.first} ${person.last}`);
};

printName({ first: 'Arda', last: 'Guller' });

//type aliases
type profile = { name: string; age: number };

let dog: profile = { name: 'Elton', age: 1.5 };

//printName({first: 'Mick', last: 'Jagger', age: 47});

const singer = { first: 'Mick', last: 'Jagger', age: 47 };

//if I assign extra properties of an object and declare it in a new variable, singer in this case, then if I use that variable inside the function, no errors given by tsc
printName(singer);

//type aliases
type points = {
  x: number;
  y: number;
};

const axis = (coordinates: points): points => {
  return { x: coordinates.x * 2, y: coordinates.y * 2 };
};

//a function with a nested object type parameter
type song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 12872221,
  credits: {
    producer: 'Phill Spector',
    writer: 'Alex North',
  },
};

let myEarnings = calculatePayout(mySong);
console.log(myEarnings);
printSong(mySong);
