type Person = {
    name: string;
    age: number;
    exp: number;
};

type Employee = {
    readonly id: number;
    company: string;
    department: { designation: string; level: string };
};

//union
type zacks = Person & Employee;

const empProfile = (profile: zacks): void => {
    console.log(
        `${profile.name} is working in ${profile.company} for last ${profile.exp} years as ${profile.department.level} in the ${profile.department.designation} department and is ${profile.age} years old.`
    );
};

let sanjib: zacks = {
    name: 'Sanjib',
    age: 40,
    exp: 12,
    id: 126,
    company: 'Zacks',
    department: { designation: 'web designer', level: 'Senior' },
};

empProfile(sanjib);
