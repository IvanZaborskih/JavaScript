"use strict";

// let john = { name: 'john' };
// console.log(john);
// let arr = [john];
// john = null;
// console.log(john);
// console.log(arr[0]);

// let map = new Map();
// map.set(john, 'name');
// console.log(map);
// john = null;
// console.log(map);


//      WeakMap
let obj = { name: 'Ivan' };
let weakMap = new WeakMap();
weakMap.set(obj, 'ok');
obj = null;
// объект john удалён из памяти!
