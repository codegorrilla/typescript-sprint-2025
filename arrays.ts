//const activeUsers: [] = [] => this is an empty array without the type of array being defined and will yell if we went to add any type of data into the empty array

const activeUsers: string[] = [];

activeUsers.push("Steven");

console.log(activeUsers);

//another writing pattern
const bools: Array<boolean> = []; //const bools: boolean[] = []

//array with a custom type

type points = {
    x: number;
    y: number;
}

const myCoords: points[] = [];

console.log(myCoords.push({x: 20, y: 30}));


//multidimensional arrays
const multiArr: string[][] = [["x", "o", "x"], ["o", "x", "x"], ["x", "o", "x"]];

//mixed array
const mixedArr: any[] = [];

const mix1 = mixedArr.push("Hello", "Sanjib", 1);

console.log(mixedArr);