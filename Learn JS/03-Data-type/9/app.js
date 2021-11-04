"use strict";

// let user = {
//     name: 'Ivan',
//     age: 22,
//     man: true
// };
// // console.log(Object.keys(user));
// // console.log(Object.values(user));
// // console.log(Object.entries(user));
// for (let item of Object.values(user)) {
//     console.log(item);
// }

// let prices = {
//     banana: 100,
//     apple: 70,
//     gold: 4000,
//     kitkat: 10
// };
// let doublePrice = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );
// console.log(doublePrice);


//      Задачи
//  Сумма свойств объекта
// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let price of Object.values(salaries)) {
//         sum += price;
//     }
//     return sum;
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// console.log(sumSalaries(salaries)); // 650


//  Подсчёт количества свойств объекта
// function count(user) {
//     return Object.keys(user).length;
// }

// let user = {
//     name: 'John',
//     age: 30
// };
// console.log(count(user)); // 2