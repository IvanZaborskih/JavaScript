"use strict";
// let id = Symbol('id');
// console.log(id.description);

// let user = {
//     name: 'Ivan',
// };
// let id = Symbol('id');
// user[id] = 1;
// console.log(user[id]);

// id = Symbol('id');
// user[id] = 'Their';
// console.log(user);


// Символы в литеральном объекте
// let id = Symbol('id');
// let user = {
//     name: 'Ivan',
//     [id]: 101,
// };
// console.log(user);


// Символы игнорируются циклом for…in
// let id = Symbol('id');
// let user = {
//     name: 'Ivan',
//     age: 22,
//     [id]: 101,
// };

// for (let key in user) {
//     console.log(user[key]);// name, age (свойства с ключом-символом нет среди перечисленных)
// }
// console.log(user[id]);// хотя прямой доступ по символу работает
// console.log(Object.keys(user));

// let clone = Object.assign({}, user); // А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства
// console.log(clone);


// Глобальные символы
// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for('id');
// // читаем его снова в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for('id');
// // проверяем -- это один и тот же символ
// console.log(id === idAgain); // true

// получаем символ по имени
let sum = Symbol.for('name');
let sum2 = Symbol.for('id');
// получаем имя по символу
console.log(Symbol.keyFor(sum));
console.log(Symbol.keyFor(sum2));




