"use strict";
/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = { */
/* const person = {
    name: 'Justine',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
}; */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Justine',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
};
// person.role.push('admin');
/* person.role[1] = 10;

person.role = [0, 'admin', 'user']; */
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
