//          (1) Область видимости
//  (1.1) IIFE
// (function module1() {
//     const a = 42;
//     console.log(a);
// })();
// (function module2() {
//     const a = '43!';
//     console.log(a);
// })();



//          (2) Контекст выполнения - this
// function whatsThis() {
//     console.log(this === window);
// }
// whatsThis();  // true

//          (2.1) Метод объекта
// const user = {
//     name: 'Goga',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
// user.greet();

//          (2.2) Непрямой вызов
// function greet(greetWord, emotion) {
//     console.log(`${greetWord} ${this.name} ${emotion}`);
// }
// const user1 = { name: 'Ivan' };
// const user2 = { name: 'Goga' };
// // .call() принимает аргументы списком через запятую:
// greet.call(user1, 'Hello', '^_^');
// greet.call(user2, 'Good morning', ':)');
// // .apply() же — принимает массив аргументов:
// greet.apply(user1, ['Hello', '^_^']);
// greet.apply(user2, ['Good morning', ':)']);
// // В остальном они идентичны.

//          (2.3) Связывание функций
// function greet() {
//     console.log(`Hello, ${this.name}`);
// }
// const user1 = { name: 'Ivan' };
// const greetUser1 = greet.bind(user1);
// greetAlex();

//          (2.4) Стрелочные функции
// function greetWaitAndAgain() {
//     console.log(`Hello, ${this.name}`);
//     setTimeout(() => {
//         console.log(`Hello again, ${this.name}`);
//     });
// }
// const user1 = { name: 'Ivan' };
// greetWaitAndAgain.call(user1);



//          (3) Чистые функции и побочные эффекты
// // Например, pureFn при вводе 10 и 20 всегда будет возвращать 15, значит она чистая:
// function pureFn(a, b) {
//     return ((a + b) * a) / b
// }
// // А impureFn нечистая — она будет возвращать разные значения
// function impureFn(a, b) {
//     return ((a + b) * a) / Math.random()
// }



//          (4) Функции высшего порядка
// const isNegative = (n) => n < 0;
// const isEven = (n) => n % 2 === 0;
// const negative = filter(list, isNegative);
// const even = filter(list, isEven);

// function filter(list, predicate) {
//     const result = [];

//     list.forEach((value) => {
//         if (predicate(value)) {
//             result.push(value);
//         }
//     });

//     return result;
// }



//          (5) Каррирование
// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         }

//         return function continueCurrying(...args2) {
//             return curried.apply(this, args.concat(args2));
//         }
//     }
// }
// const curriedMultiply = curry(multiply);
// const double = curriedMultiply(2);
// const result = curriedMultiply(2, 10);



//          (6) Рекурсия
// //          Факториал с помощью цикла
// function factorial(n) {
//     // Начальный результат будет равен 1,
//     // чтобы его можно было умножать на последующие числа.
//     // 0 подходит только для подсчёта суммы,
//     // потому что умножение на 0 всегда даёт 0.
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         // Так как наш счётчик начинается с 0
//         // и растёт до n-1, нам нужно прибавить к нему
//         // единицу, чтобы правильно рассчитать произведение.
//         result *= i + 1;
//     }

//     return result;
// }
// console.log(factorial(6)); // 120

// //          Факториал с помощью рекурсии
// function factorial(n) {
//     // Если мы пытаемся найти факториал 1,
//     // возвращаем 1 — это базовый случай.
//     if (n <= 1) {
//         return 1;
//     }

//     // В остальных случаях
//     // возвращаем произведение n
//     // на факториал предыдущего числа —
//     // таким образом мы от n дойдём до 1,
//     // перебрав каждое число.
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); // 120












