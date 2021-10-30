"use strict";

//      splice
/*
arr.splice(index[, deleteCount, elem1, ..., elemN])
Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место.
Возвращает массив из удалённых элементов.
*/
// let arr = ['Я', 'изучаю', 'JavaScript'];
// arr.splice(1, 1);   // начиная с позиции 1, удалить 1 элемент
// console.log(arr);

// let arr = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];
// arr.splice(0, 3, 'Давай', 'танцевать');     // удалить 3 первых элемента и заменить их другими
// console.log(arr);                           // теперь ["Давай", "танцевать", "прямо", "сейчас"]
// arr.splice(2, 0, 'сложный', 'язык');        // с позиции 2 удалить 0 элементов вставить "сложный", "язык"
// console.log(arr);                           // "Я", "изучаю", "сложный", "язык", "JavaScript"
// arr.splice(-3, 1, 'CSS');
// console.log(arr);                           // ['Я', 'изучаю', 'CSS', 'прямо', 'сейчас']

//      slice
/*
arr.slice([start], [end])
Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end)
*/
// let arr = ['t', 'e', 's', 't', 'i', 'n', 'g'];
// console.log(arr.slice(0, 2));     //  ['t', 'e']
// console.log(arr.slice(-4));       //  ['t', 'i', 'n', 'g']
// console.log(arr.slice());         //  создаёт копию массива arr

//      concat
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов
// let arr = [1, 2];
// console.log(arr.concat([3, 4]));        // [1, 2, 3, 4]
// console.log(arr.concat([3, 4], 5));     // [1, 2, 3, 4, 5]
// console.log(arr.concat([3, 4], 5, 6, [7, 8, 9], 10));   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//      Перебор: forEach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index, arr) => {
//     console.log(`${item} имеет позицию ${index} в ${arr}`);
// });
// Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.


//      Поиск в массиве
// indexOf/lastIndexOf и includes
// let arr = [0, 1, 'sss', 90];
// console.log(arr.indexOf('sss'));            // возвращает индекс, на котором был найден искомый элемент, в противном случае -1
// console.log(arr.indexOf(90));               // то же самое, но ищет справа налево
// console.log(arr.includes('sss'));           // возвращает true, если поиск успешен

// find и findIndex - находит объект в определенным условием
// let users = [
//     { id: 0, name: 'Ivan' },
//     { id: 1, name: 'Liza' },
//     { id: 2, name: 'Goga' }
// ];
// let user = users.find(item => item.name === 'Ivan');
// console.log(user);

// filter - возвращает массив из всех подходящих элементов
// let users = [
//     { id: 0, name: 'Ivan', money: 1500 },
//     { id: 1, name: 'Liza', money: 2500 },
//     { id: 2, name: 'Goga', money: 500 }
// ];
// let userMoney = users.filter(item => item.money > 1000);
// console.log(userMoney);


//      Преобразование массива
// map
// let arr = ['hello', 'my', 'name', 'is', 'goga'];
// let newArr = arr.map(item => {
//     let firstChar = item[0].toUpperCase();
//     item = firstChar + item.slice(1);
//     return item;
// });
// console.log(arr);
// console.log(newArr);

// sort(fn)
// let arr = [1, 2, 15];
// // метод сортирует содержимое arr
// arr.sort();
// alert(arr);  // 1, 15, 2  -  По умолчанию элементы сортируются как строки.

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// let arr = [1, 2, 15];
// arr.sort(compareNumeric);
// alert(arr);  // 1, 2, 15

// reverse  -  метод arr.reverse меняет порядок элементов в arr на обратный
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// split и join
// let names = 'Иван, Лиза, Гена, Вася, Лола';
// let arr = names.split(', ');
// console.log(arr);
// arr = arr.join('; ');
// console.log(arr);

// reduce/reduceRight
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, currentItem) => sum + currentItem, 0);
// console.log(result);

// Array.isArray  -  Он возвращает true, если value массив, и false, если нет
// console.log(Array.isArray([]));     // true
// console.log(Array.isArray({}));     // false



//      Задачи
// Переведите текст вида border-left-width в borderLeftWidth
// function camelize(str) {
//     let words = str.split('-');
//     // words = words.map((word, index) => (index === 0) ? word : word[0].toUpperCase() + word.slice(1));
//     words = words.map((word, index) => {
//         if (index === 0) {
//             return word;
//         } else {
//             return word = word[0].toUpperCase() + word.slice(1);
//         }
//     });

//     return words.join('');
// }
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// Фильтрация по диапазону
// const filterRange = (arr, indexStart, indexEnd) => {
//     let numBetween = arr.filter(item => {
//         if (item >= indexStart || item <= indexEnd) {
//             return item;
//         }
//     });

//     return numBetween;
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(arr);
// console.log(filtered);


// Фильтрация по диапазону "на месте"
// const filterRangeInPlace = (arr, indexStart, indexEnd) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < indexStart || arr[i] > indexEnd) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// };
// let arr = [5, 5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);  // удалены числа вне диапазона 1..4
// console.log(arr);  // [3, 1]


// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 2, 8, 22, -10];
// arr.sort((a, b) => b - a);
// console.log(arr);


// Скопировать и отсортировать массив
// function copySorted(arr) {
//     let sorted = arr.slice();
//     return sorted.sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)


// Создать расширяемый калькулятор
// function Calculator() {
//     this.metods = {
//         '-': (a, b) => a - b,
//         '+': (a, b) => a + b
//     };

//     this.calculate = function (str) {
//         let arr = str.split(' ');
//         let a = +arr[0];
//         let op = arr[1];
//         let b = +arr[2];

//         return this.metods[op](a, b);
//     };

//     this.addMethod = function (name, func) {
//         this.metods[name] = func;
//     }
// }
// let calc = new Calculator();
// console.log(calc.calculate('3 + 7'));
// console.log(calc.calculate('10 - 7'));
// console.log(calc.calculate('13 - 90'));

// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// console.log(powerCalc.calculate('13 * 5'));
// console.log(powerCalc.calculate('20 / 4'));
// console.log(powerCalc.calculate('2 ** 3'));


// Трансформировать в массив имён
let users = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 }
]

let names = users.filter(item => item.name);
console.log(names);


