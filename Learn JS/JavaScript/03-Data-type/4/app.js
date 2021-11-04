"use strict";
// let arr = new Array(2);     // Вызов new Array(number) создаёт массив с заданной длиной, но без элементов
// let arr = [];


//      Методы pop/push, shift/unshift
/*      Очередь
    - push добавляет элемент в конец
    - shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
    - unshift добавляет элемент в начало    */
/*      Стек
    - push добавляет элемент в конец
    - pop удаляет последний элемент  */

//      Методы, работающие с концом массива:
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log(fruits);
// fruits.push('Персик');      // Добавляет элемент в конец массива.   Вызов fruits.push() равносилен fruits.length
// console.log(fruits);

// console.log(fruits.pop());  // Удаляет последний элемент из массива и возвращает его
// console.log(fruits);

//      Методы, работающие с началом массива:
// let fruits = ["Первый", "Второй", "Третий"];
// console.log(fruits);
// console.log(fruits.shift());    // Удаляет из массива первый элемент и возвращает его
// console.log(fruits);
// fruits.unshift('Новый первый'); // Добавляет элемент в начало массива.   Вызов fruits.unshift() равносилен fruits.length
// console.log(fruits);
// Методы push и unshift могут добавлять сразу несколько элементов:
// fruits.push('Четвертый', 'Пятый');
// fruits.unshift('-1', '0')
// console.log(fruits);


//      Перебор элементов
// let arr = ["Яблоко", "Апельсин", "Груша"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ["Яблоко", "Апельсин", "Груша"];
// for (let elem of arr) {
//     console.log(elem);
// }


//      Многомерные массивы
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[0][1]);


//      toString
// let arr = [1, 2, 3];
// console.log(arr);
// console.log(String(arr));
// console.log([] + 1);
// console.log([1] + 1);
// console.log([1, 2] + 1);


// Задачи
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);


//      Сумма введённых чисел
// function sumInput() {
//     let numArray = [];
//     let sum = 0;

//     while (true) {
//         let userIn = prompt('Введите число: ', 0);
//         if (userIn === null || isNaN(+userIn) || userIn === '') break;

//         numArray.push(+userIn);
//     }

//     for (let num of numArray) {
//         sum += num;
//     }

//     return sum;
// }
// alert(sumInput());


//      Подмассив наибольшей суммы
function getMaxSubSum(arr) {
    let sum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum < arr[i]) {
            sum = arr[i];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}

alert(getMaxSubSum([1, 2, 1, -2, 1, 6]))
// alert(getMaxSubSum([-1, -2, -3]))
// alert(getMaxSubSum([-1, 2, 3, -10]))
// alert(getMaxSubSum([2, -1, 2, 3, -9]))
// alert(getMaxSubSum([-1, 2, 3, -9, 11]))
// alert(getMaxSubSum([-2, -1, 1, 2]))
// alert(getMaxSubSum([100, -9, 2, -3, 5]))
// alert(getMaxSubSum([1, 2, 3]))
