"use strict";
// let user = {
//     name: 'Ivan',
//     age: 22,
//     sayHi() {
//         console.log('Hi');
//     },
// };

// user.sayHi();


// // Ключевое слово «this» в методах
// let user = {
//     name: 'Ivan',
//     age: 22,
//     sayHi() {
//         console.log('Hi,', this.name);
//     },
// };

// user.sayHi();


// «this» не является фиксированным
// let user = { name: 'Ivan' };
// let admin = { name: 'Goga' };

// function sayHi() {
//     console.log(this.name, 'hi!');
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// function sayHi() {
//     alert(this);
// }
// sayHi(); // undefined


// У стрелочных функций нет «this»
// let user = {
//     firstName: "Илья",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };
// user.sayHi(); // Илья


// let user = {
//     name: "Джон",
//     go: function () { alert(this.name) }
// };
// user.go();


// function makeUser() {
//     return {
//         name: 'Ivan',
//         ref: this,
//     };
// };
// let user = makeUser();
// console.log(user.ref.name); // Error

// function makeUser() {
//     return {
//         name: 'Ivan',
//         ref() {
//             return this
//         },
//     };
// };
// let user = makeUser();
// console.log(user.ref().name); // Теперь это работает, поскольку user.ref() вызывается как метод. И значением this становится объект перед точкой .


// let calculator = {
//     read() {
//         this.a = +prompt('Введите первое число: ', 0);
//         this.b = +prompt('Введите второе число: ', 0);
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // без return this;

ladder.up().up().up().showStep();  // с return this;
