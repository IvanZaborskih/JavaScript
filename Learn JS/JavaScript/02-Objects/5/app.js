"use strict";

// Функция-конструктор
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User('Ivan');
// console.log(user.name);
// console.log(user.isAdmin);
// /*
// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
// }
// */


// Возврат значения из конструктора return
// function BigUser() {
//     this.name = 'Ivan';
//     this.age = 22;

//     return { name: 'Goga', };
// }
// let user = new BigUser();
// console.log(user.name);


// Создание методов в конструкторе
// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         alert('Меня зовут - ' + this.name);
//     };
// }
// let user1 = new User('Ivan');
// user1.sayHi();


// Две функции - один объект
// let obj = {};
// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }

// let a = new A;
// let b = new B;

// alert(a == b); // true


// Создание калькулятора при помощи конструктора
// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function () {
//         return this.a + this.b;
//     };
//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();
// alert('Sum = ' + calculator.sum());
// alert('Mul = ' + calculator.mul());


// Создаём Accumulator
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Введите новое число: ', 0);
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);





