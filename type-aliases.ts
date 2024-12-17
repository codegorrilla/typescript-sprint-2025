//type aliases

type company = {
  name: string;
  business: string;
  strength: number;
  owner: string;
  department: { deptname: string; subject: string };
};

const compBio = (profile: company) => {
  console.log(
    `${profile.name} is a ${profile.business} company which has a strength of ${profile.strength} employees and its owned by ${profile.owner}.`
  );
};

const zacks: company = {
  name: 'Zacks',
  business: 'Stock analysis and research',
  strength: 1000,
  owner: 'Len Zacks',
  department: { deptname: 'SW', subject: 'development' },
};

const myComp = compBio(zacks);

//intersections
type Cat = {
  habit: string;
  color: string;
};

type Dog = {
  name: string;
  breed: string;
};

//intersection
type CatDog = Cat & Dog;

const myPet = (profile: CatDog): void => {
  console.log(
    `${profile.name} is a ${profile.breed} of ${profile.color} color but don\'t have a habit of ${profile.habit}.`
  );
};

let pet: CatDog = {
  name: 'Bruno',
  breed: 'Dalmetian',
  color: 'Golden white',
  habit: 'purring',
};

const petProfile = myPet(pet);

//excess property
const printName = (person: { first: string; last: string }): void => {
  console.log(`${person.first} ${person.last}`);
};

//printName({first: "Mick", last: "Jagger", age: 32}); => type will yell at us as the object literal will only read first and last nd not age as age not is not pre-defined in the literal

let singer = { first: 'Mick', last: 'Jagger', age: 32 };

printName(singer);

//optional properties
type point = {
  x: number;
  y: number;
  z?: number; //optional
};

const myCoordinate: point = { x: 30, y: 40, z: 60 };

const coordinate = (point: point): void => {
  console.log(`The co-ordinates are ${point.x}degree, ${point.y}degree`);
};

const coord2 = (point: point): void => {
  console.log(
    `The co-ordinates are ${point.x}degree, ${point.y}degree and ${point.z}degree`
  );
};

coordinate(myCoordinate);
coord2(myCoordinate);

//readonly keyword/modifier
type User = {
  readonly id: number;
  name: string;
};

const username: User = {
  id: 123,
  name: 'Sanjib',
};

//you can not do it as ID is a readonly modifier
//username.id = 345
//readonly modifiers can be used with primitive data types but not with reference types such as arrays and objects
