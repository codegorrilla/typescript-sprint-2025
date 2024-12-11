//type aliases
var compBio = function (profile) {
    console.log("".concat(profile.name, " is a ").concat(profile.business, " company which has a strength of ").concat(profile.strength, " employees and its owned by ").concat(profile.owner, "."));
};
var zacks = {
    name: "Zacks",
    business: "Stock analysis and research",
    strength: 1000,
    owner: "Len Zacks",
    department: { deptname: "SW", subject: "development" }
};
var myComp = compBio(zacks);
var myPet = function (profile) {
    console.log("".concat(profile.name, " is a ").concat(profile.breed, " of ").concat(profile.color, " color but don't have a habit of ").concat(profile.habit));
};
var pet = {
    name: "Bruno",
    breed: "Dalmetian",
    color: "Golden white",
    habit: "purring"
};
var petProfile = myPet(pet);
