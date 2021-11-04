"use strict";

// let user = new Object();
// let user1 = {};
// console.log(user);
// console.log(user1);

// let user = {
//     name: 'John',
//     languages: ['ru', 'en'],
//     age: 22,
//     'likes birds': true,
// };

// console.log(user.name);
// console.log(user.age);

// user.isAdmin = true; // добавление нового свойства
// delete user.age; // удаление свойства
// console.log(user);

// console.log(user['likes birds']);

// let key = prompt();
// console.log(user[key]);

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// console.log(bag.apple); // 5, если fruit="apple"

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5, // bag.appleComputers = 5
// };
// console.log(bag[fruit + 'Computers']);

// function makeUser(name, age) {
//     return {
//         name,
//         age
//         // ...другие свойства
//     };
// }
// let user = makeUser("John", 30);
// console.log(user);

// let user = {
//     name,  // тоже самое, что и name:name
//     age
// };
// console.log(user.name);

// let user = {};
// alert(user.noSuchProperty === undefined);

// let user = {
//     name: 'John',
//     languages: ['ru', 'en'],
//     age: 22,
//     'likes birds': true,
// };

// console.log('name' in user);
// console.log('lastname' in user);
// let key = 'name';
// console.log(key in user);

// for (let key in user) {
//     console.log('Ключ: ' + key + ' | Значение: ' + user[key]);
// }

// let codes = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     "+1": "США"
// };
// for (let code in codes) {
//     console.log(code);
// }



// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let schedule = {};
// console.log(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); // false
// function isEmpty(obj) {
//     for (let prop in obj) {
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sumSalaties = 0;
// for (let key in salaries) {
//     sumSalaties += salaries[key];
// }
// console.log(sumSalaties);

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }
// // до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// multiplyNumeric(menu);
// console.log(menu);