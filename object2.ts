type pedigree = {
    breed: string,
    name: string,
    color: string,
    age: number,
    owner: {first: string, last: string}
};

const dogProfile = (profile: pedigree): void =>{
    //return `${profile.name} is a ${profile.breed} and it's color is ${profile.color}`;
    console.log(`${profile.name} is a ${profile.breed} and it's color is ${profile.color}`);
};

const bruno: pedigree = {
    breed: "Doberman",
    name: "Bruno",
    color: "Brown",
    age: 2,
    owner: {first: "Simon", last: "Todd"}
};

let myDog = dogProfile(bruno);

//console.log(myDog);


//another example of type aliases and nested object

//type alias
type game = {
    name: string,
    type: string,
    studio: {developer: string, market: string},
    multiplayer: boolean,
    year: number,
    profit: number
};

const calcProfit = (earning: game): any=>{
    return `The ${earning.name} which is a ${earning.type} game, has earned a net profit of ` + earning.profit * 0.3232 + `USD for the year ${earning.year}`
};


const detail = (gameProfile: game): any =>{
    return `<br> ${gameProfile.name} has been developed by ${gameProfile.studio.developer} and is marketed by ${gameProfile.studio.market} is an ${gameProfile.type} game and is released on ${gameProfile.year}<br> and is it a multiplayer game: ${gameProfile.multiplayer}`
}


const lou: game = {
    name: 'Last of US',
    type: 'Adventure',
    studio: {developer: 'Naughty Dog', market: 'Sony'},
    multiplayer: false,
    year: 2012,
    profit: 30000
};

let gameProfit = calcProfit(lou);
let gameDetail = detail(lou);

document.documentElement.innerHTML = gameProfit + gameDetail;






