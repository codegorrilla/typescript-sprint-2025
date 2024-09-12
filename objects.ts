const printName = (person: {first: string, last: string}): void=>{
    console.log(`my name is ${person.first} ${person.last}`);
}

printName({first: 'Arda', last: 'Guller'});