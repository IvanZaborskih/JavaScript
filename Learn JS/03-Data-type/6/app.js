"use strict";

// Перебираемые объекты
//  Symbol.iterator
// let range = {
//     from: 1,
//     to: 5
// };
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };
// for (let num of range) {
//     console.log(num);
// }

//      Строка – перебираемый объект
// for (let char of 'string') {
//     console.log(char);
// }

//      Явный вызов итератора
// let str = 'perebor stroki';
// let iterator = str[Symbol.iterator]();
// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     console.log(result.value);
// }

//