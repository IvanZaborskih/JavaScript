"use strict";

// let map = new Map();

// map.set(1, 'num1');
// map.set('1', 'str1');
// map.set(true, 'boolean');
// console.log('map.size = ', map.size);
// console.log(map.get(1));
// console.log(map.get('1'));
// console.log(map.has(2));
// map.delete(true);
// console.log(map);
// console.log('map.size = ', map.size);

// // Map может использовать объекты в качестве ключей
// let john = { name: 'John' };
// map.set(john, 'obj');
// console.log(map);


//      Перебор Map
// let recipeMap = new Map([
//     ['огурец', 500],
//     ['капуста', 350],
//     ['лук', 100]
// ]);

// // перебор по ключам (овощи)
// for (let keys of recipeMap.keys()) {
//     console.log(keys);
// }
// // перебор по значениям (числа)
// for (let keys of recipeMap.values()) {
//     console.log(keys);
// }
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) {
//     console.log(entry);
// }
// // выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// })


//      Object.entries: Map из Object
// let map = new Map([
//     ['1', 'str-1'],
//     [1, 'num-1'],
//     [true, 'bool1']
// ]);
// console.log(map.get(1));

// let obj = {
//     name: 'Ivan',
//     age: 22,
//     sex: 'male'
// };
// // мы можем создать Map из обычного объекта следующим образом:
// let map = new Map(Object.entries(obj));
// console.log(map);


//      Object.fromEntries: Object из Map
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);
// console.log(prices);


//      Set
// let set = new Set();
// let ivan = { name: 'Ivan' };
// let liza = { name: 'Liza' };
// let goga = { name: 'Goga' };
// set.add(ivan);
// set.add(liza);
// set.add(goga);
// set.add(ivan);
// set.add(goga);
// for (let user of set) {
//     console.log(user.name);
// }


//      Перебор объекта Set
// let set = new Set(["апельсин", "яблоко", "банан"]);
// for (let value of set) {
//     console.log(value);
// }
// set.forEach((value, valueAgain, set) => {
//     console.log(value);
// })



// Задачи
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O






