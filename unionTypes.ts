//union types
let age: number | string = 21;

age = 23;
age = '42';

type Points = {
  x: number;
  y: number;
};

type loc = {
  lat: number;
  long: number;
};

let setCoord: Points | loc = { x: 34, y: 33 };

setCoord = { lat: 33.34, long: 23.34 };

//union types with function

//type narrowing
const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }

  return price * tax;
};

console.log(calculateTax(2300, 0.5));
console.log(`The price is ${calculateTax('$2300', 0.5)}`);

//union types with arrays
const stuff: (number | string)[] = [12, 'Sanjib'];

//union types combining with literal types
let zero: 0 = 0;
let hi: 'hi' = 'hi';

let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad';

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let today: DayOfWeek = 'Sunday';
