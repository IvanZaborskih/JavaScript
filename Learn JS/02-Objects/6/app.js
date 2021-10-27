"use strict";
// let user = {};
// console.log(user?.adress?.street);
// user = null;
// console.log(user?.adress);

// let user1 = {
//     admin() {
//         return 'I am admin';
//     },
// };
// let user2 = {};
// console.log(user1.admin?.());
// console.log(user2.admin?.());

let user1 = {
    name: 'Ivan',
};
let user2 = null;
let key = 'name';
console.log(user1?.[key]);
console.log(user2?.[key]);

let user = {
    name: 'qwe',
    age: 22,
};
delete user?.name; // Удалить user.name, если пользователь существует
console.log(user);