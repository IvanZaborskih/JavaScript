"use strict";
// let billion = 1000000000;
// let shortBillion = 1e9;
// console.log(shortBillion);

// let ms = 0.000006;
// let shorsMs = 6e-6;
// console.log(shorsMs);

// // Шестнадцатеричные, двоичные и восьмеричные числа
// console.log(0xff); // Шестнадцатеричные числа
// console.log(0o377); // восьмеричная форма записи числа 255
// console.log(0b11111111); // бинарная форма записи числа 255

// toString(base) - представляет число в строковом виде в указанной системе счисления base
// let num = 255;
// console.log(num.toString(2)); // 11111111
// console.log(num.toString(16)); // ff

// Округление
// let a = 3.5;
// console.log(a);
// console.log(Math.floor(a)); // Округление в меньшую сторону
// console.log(Math.ceil(a)); // Округление в большую сторону
// console.log(Math.round(a)); // Округление до ближайшего целого
// console.log(Math.trunc(a)); // Производит удаление дробной части без округления
// let b = 12.3467;
// console.log(b.toFixed(3)); // округляет число до n знаков после запятой и возвращает строковое представление результата.

// Неточные вычисления
// console.log(0.1 + 0.2);
// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(2));
// console.log(999999999999999);

// Проверка: isFinite и isNaN
// console.log(isNaN(NaN)); // true  -   преобразует значение в число и проверяет является ли оно NaN
// console.log(isNaN('str')); // true
// console.log(isNaN(1)); // false

// console.log(isFinite('123')); // true   -   преобразует аргумент в число и возвращает true, если оно является обычным числом
// console.log(isFinite(123)); // true
// console.log(isFinite('str')); // false

// Сравнение Object.is
// console.log(Object.is(NaN, NaN)); // true
// console.log(Object.is(-0, 0)); // false

// parseInt и parseFloat
// console.log(+"100px");
// console.log(parseInt('100px')); // 100
// console.log(parseFloat('12.5px')); // 12.5
// console.log(parseInt('12e45')); // 12
// console.log(parseFloat('12.5.6')); // 12.5
// console.log(parseInt('y100')); // NaN
// console.log(parseInt('0xff', 16)); // 255   (Второй аргумент parseInt - определяет систему счисления)

// Другие математические функции
// console.log(Math.random());
// console.log(Math.max(1, 5, 23, 90, 2, 5));
// console.log(Math.min(1, 5, 23, 90, 2, 5));
// console.log(Math.pow(2, 10));


// Задачи
// function sum() {
//     let a = +prompt('Первое слагаемое; ', 0);
//     let b = +prompt('Второе слагаемое; ', 0);

//     return a + b;
// }
// console.log(sum());


// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));
// console.log(6.35.toFixed(20));
// console.log((Math.round(6.35 * 10)) / 10);


// function readNumber() {
//     let check = true;
//     let num;

//     while (check) {
//         num = prompt('Введите число: ');
//         if (num === null || num === '') {
//             return null;
//         } else if (!isNaN(num)) {
//             return Number(num);
//         }
//     }
// }
// alert(readNumber());

// function readNumber() {
//     let num;

//     do {
//         num = prompt('Введите число: ');
//     }
//     while (!isFinite(num))

//     if (num === null || num === '') {
//         return null;
//     }
//     return +num;
// }
// alert(readNumber());


// Случайное число от min до max
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(random(1, 2));
console.log(random(1, 5));
console.log(random(2, 5));
console.log(random(6, 9));
console.log(random(0, 10));


// Случайное целое число от min до max
// не лучшее решение
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// правильно
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
// правильно
function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randomInteger(0, 2));
console.log(randomInteger(1, 5));
console.log(randomInteger(2, 5));
console.log(randomInteger(6, 9));
console.log(randomInteger(0, 10));

