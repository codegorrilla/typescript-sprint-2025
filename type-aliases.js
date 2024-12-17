//type aliases
var compBio = function (profile) {
  console.log(
    ''
      .concat(profile.name, ' is a ')
      .concat(profile.business, ' company which has a strength of ')
      .concat(profile.strength, ' employees and its owned by ')
      .concat(profile.owner, '.')
  );
};
var zacks = {
  name: 'Zacks',
  business: 'Stock analysis and research',
  strength: 1000,
  owner: 'Len Zacks',
  department: { deptname: 'SW', subject: 'development' },
};
var myComp = compBio(zacks);
var myPet = function (profile) {
  console.log(
    ''
      .concat(profile.name, ' is a ')
      .concat(profile.breed, ' of ')
      .concat(profile.color, " color but don't have a habit of ")
      .concat(profile.habit, '.')
  );
};
var pet = {
  name: 'Bruno',
  breed: 'Dalmetian',
  color: 'Golden white',
  habit: 'purring',
};
var petProfile = myPet(pet);
//excess property
var printName = function (person) {
  console.log(''.concat(person.first, ' ').concat(person.last));
};
//printName({first: "Mick", last: "Jagger", age: 32}); => type will yell at us as the object literal will only read first and last nd not age as age not is not pre-defined in the literal
var singer = { first: 'Mick', last: 'Jagger', age: 32 };
printName(singer);
var myCoordinate = { x: 30, y: 40, z: 60 };
var coordinate = function (point) {
  console.log(
    'The co-ordinates are '
      .concat(point.x, 'degree, ')
      .concat(point.y, 'degree')
  );
};
var coord2 = function (point) {
  console.log(
    'The co-ordinates are '
      .concat(point.x, 'degree, ')
      .concat(point.y, 'degree and ')
      .concat(point.z, 'degree')
  );
};
coordinate(myCoordinate);
coord2(myCoordinate);
var username = {
  id: 123,
  name: 'Sanjib',
};
//you can not do it as ID is a readonly modifier
//username.id = 345
//readonly modifiers can be used with primitive data types but not with reference types such as arrays and objects
