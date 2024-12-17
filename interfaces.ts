//interfaces are very similar to type aliases
// interfaces only works for the objects
interface point {
  x: number;
  y: number;
}

const myPts: point = { x: 23, y: 56 };

//optional properties and readonly modifier with methods inside interface
interface person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //sayHi: () => string
  sayHi(): string;
}

const thomas: person = {
  first: 'Thomas',
  last: 'Hardy',
  id: 123,
  sayHi: () => {
    return `Hello! ${name}`;
  },
};

//thomas.id = 234; not possible as it's a readonly prop.

//interface parameters and their types
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'Blue Suede Shoes',
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(`$${shoes.applyDiscount(0.2)} USD`);

//types vs interfaces
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

//in case when we're using type aliases on re-assigning a new key to the same type doesn't reflect it while calling it with a variable name, while interface used to re-open any type and add additional props/keys to it.

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'German Shepherd',
  bark: () => {
    return 'woof woof';
  },
};

//interface single inheritance
interface ServiceDog extends Dog {
  job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 1,
  breed: 'Lab',
  bark() {
    return 'Bark!';
  },
  job: 'guide dog',
};

console.log(`Elton sounds ${elton.bark()}`);
console.log(`Chewy is a ${chewy.job}`);

//multiple inheritance with interface
interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const tony: Engineer = {
  name: 'Tony',
  id: 123456,
  email: 'tonyhwak@gmail.com',
  level: 'Senior',
  languages: ['JS', 'React', 'Typescript'],
};

console.log(
  `${tony.name} is a ${tony.level} engineer and have expertise in ${tony.languages}`
);

//if we're not describing the shape of an object, then we've to use type aliases instead of using interfaces. e.g. type color: "red" | "green"
