//typeof guard
function triple(value: string | number) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }

    return value * 3;
}

//truthiness guard
const el = document.getElementById('idk');

// if(el){
//     el
// }else{
//    el 
// }

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    } else {
        console.log("You didn't pass in a word");
    }
}

//equality operators
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
    }
}

//in operator narrowing
interface Movie {
    title: string;
    duration: number;
}

interface tvShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRunTime(media: Movie | tvShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }

    return media.duration;
}

console.log(getRunTime({ title: "Amadeus", duration: 141 })); //array destructuring
console.log(getRunTime({ title: "Cocomelon", numEpisodes: 30, episodeDuration: 40 }));


//instanceof narrowing
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

printFullDate("2025-03-12");

//for classes
class User {
    constructor(public username: string) { }
}

class Company {
    constructor(public name: string) { }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity;
    } else {
        entity;
    }
}

//type predicates
interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

// function isCat(animal: Cat | Dog): animal as Cat{
//     return (animal as Cat).numLives !== undefined;
// }

// function makeNoise(animal: Cat | Dog): string {
//     if (isCat(animal)) {
//         animal
//         return "Meow"
//     } else {
//         animal
//         return "Woof"
//     }
// }

//discriminated unions
interface Rooster {
    name: string;
    age: number;
    weight: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type farmAnimal = Pig | Cow | Rooster | Sheep;

function getFarmAnimalSound(animal: farmAnimal) {
    switch (animal.kind) {
        case ("cow"):
            return "mooh!";

        case ("pig"):
            return "oink!";

        case ("rooster"):
            return "cuckoo!";

        case ("sheep"):
            return "Baaa!"

        default:
        //we should never make it hear , if we have handled all cases correctly
        // const _exhaustiveCheck: never = animal;
        // return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));