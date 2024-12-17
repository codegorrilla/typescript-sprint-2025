//const activeUsers: [] = [] => this is an empty array without the type of array being defined and will yell if we went to add any type of data into the empty array
var activeUsers = [];
activeUsers.push('Steven');
console.log(activeUsers);
//another writing pattern
var bools = []; //const bools: boolean[] = []
var myCoords = [];
console.log(myCoords.push({ x: 20, y: 30 }));
//multidimensional arrays
var multiArr = [
  ['x', 'o', 'x'],
  ['o', 'x', 'x'],
  ['x', 'o', 'x'],
];
//mixed array
var mixedArr = [];
var mix1 = mixedArr.push('Hello', 'Sanjib', 1);
console.log(mixedArr);
