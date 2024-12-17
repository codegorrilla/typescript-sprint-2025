var myPts = { x: 23, y: 56 };
var thomas = {
    first: 'Thomas',
    last: 'Hardy',
    id: 123,
    sayHi: function () {
        return "Hello! ".concat(name);
    },
};
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log("$".concat(shoes.applyDiscount(0.2), " USD"));
//in case when we're using type aliases on re-assigning a new key to the same type doesn't reflect it while calling it with a variable name, while interface used to re-open any type and add additional props/keys to it.
var elton = {
    name: 'Elton',
    age: 0.5,
    breed: 'German Shepherd',
    bark: function () {
        return 'woof woof';
    },
};
var chewy = {
    name: 'Chewy',
    age: 1,
    breed: 'Lab',
    bark: function () {
        return 'Bark!';
    },
    job: 'guide dog',
};
console.log("Elton sounds ".concat(elton.bark()));
console.log("Chewy is a ".concat(chewy.job));
var tony = {
    name: 'Tony',
    id: 123456,
    email: 'tonyhwak@gmail.com',
    level: 'Senior',
    languages: ['JS', 'React', 'Typescript'],
};
console.log("".concat(tony.name, " is a ").concat(tony.level, " engineer and have expertise in ").concat(tony.languages));
//if we're not describing the shape of an object, then we've to use type aliases instead of using interfaces. e.g. type color: "red" | "green"
