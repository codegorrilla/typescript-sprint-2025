//type aliases

type company = {
    name: string,
    business: string,
    strength: number,
    owner: string,
    department: {deptname: string, subject: string}
};

const compBio = (profile: company)=>{
    console.log(`${profile.name} is a ${profile.business} company which has a strength of ${profile.strength} employees and its owned by ${profile.owner}.`)
};

const zacks:company = {
    name: "Zacks",
    business: "Stock analysis and research",
    strength: 1000,
    owner: "Len Zacks",
    department: {deptname: "SW", subject: "development"}
};

const myComp = compBio(zacks);

//intersections
type Cat = {
    habit: string,
    color: string
};

type Dog = {
    name: string,
    breed: string
};

//intersection
type CatDog = Cat & Dog;

const myPet = (profile: CatDog): void =>{
    console.log(`${profile.name} is a ${profile.breed} of ${profile.color} color but don\'t have a habit of ${profile.habit}.`);
};

let pet: CatDog = {
    name: "Bruno",
    breed: "Dalmetian",
    color: "Golden white",
    habit: "purring"
}

const petProfile = myPet(pet);