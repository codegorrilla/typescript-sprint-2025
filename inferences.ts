const movies = [
  'Mission impossible',
  'Brokeback Mountain',
  'Titanic',
  'Mummy',
  'Spiderman',
];

var findMovies: string;

for (let movie of movies) {
  if (movie === 'Spiderman') {
    findMovies = 'Spiderman';
    console.log(findMovies);
  }
}
