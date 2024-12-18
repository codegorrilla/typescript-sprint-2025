"use strict";
const empProfile = (profile) => {
    console.log(`${profile.name} is working in ${profile.company} for last ${profile.exp} years as ${profile.department.level} in the ${profile.department.designation} department and is ${profile.age} years old.`);
};
let sanjib = {
    name: 'Sanjib',
    age: 40,
    exp: 12,
    id: 126,
    company: 'Zacks',
    department: { designation: 'web designer', level: 'Senior' },
};
empProfile(sanjib);
