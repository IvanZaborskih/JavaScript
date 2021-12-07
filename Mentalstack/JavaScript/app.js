//          (1) Остаточные параметры
// function sum(...args) {
//     let total = 0;

//     for (let elem of args) {
//         total += elem;
//     }

//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// function showName(firstName, lastName, ...titles) {
//     console.log(firstName + ' ' + lastName); // Юлий Цезарь
//     // Оставшиеся параметры пойдут в массив
//     // titles = ["Консул", "Император"]
//     console.log(titles[0]); // Консул
//     console.log(titles[1]); // Император
//     console.log(titles.length); // 2
// }
// console.log(showName("Юлий", "Цезарь", "Консул", "Император"));


//          (1.1) Оператор расширения
// let arr = [3, 5, 1];
// console.log(Math.max(...arr)); // 5
// оператор "раскрывает" массив в список аргументов

// let arr1 = [1, -2, 900, 4];
// let arr2 = [100, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2)); // 8

// let str = 'Hello, World';
// console.log([...str]);


//          (2) Деструктуризация массивов
// let fruits = ['apple', 'banana'];
// // деструктурирующее присваивание
// // записывает apple = arr[0], banana = arr[1]
// let [apple, banana] = fruits;
// console.log(fruits);
// console.log(apple);
// console.log(banana);

// let [apple, banana] = 'apple, banana'.split(', ');
// console.log(apple);
// console.log(banana);

// let [first, , third] = ['first', 'second', 'third'];
// console.log(first);
// console.log(third);

// let [a, b, c] = 'abc';
// let [one, two, three] = new Set([1, 2, 3,]);
// console.log(a);
// console.log(b);
// console.log(c);

//          (2.1) Остаточные параметры (rest - оператор)
// let [name1, name2, ...fruits] = ['apple', 'banana', 'strawberry', 'pineapple'];
// console.log(name1);
// console.log(name2);
// console.log(fruits);
// console.log(fruits.length);

//          (2.2) Значения по умолчанию
// let [firstName = 'Ivan', secondName = 'Gogin'] = ['Goga'];
// console.log(firstName);
// console.log(secondName);


//          (3) Деструктуризация объектов
// let options = {
//     title: 'menu',
//     width: 100,
//     height: 200
// };
// let { title, width, height } = options;
// console.log(title);
// console.log(width);
// console.log(height);

// let { width: w, height: h, title: t } = options;
// console.log(t);
// console.log(w);
// console.log(h);

// let options = {
//     title: 'menu',
// };
// let { title, width = 200, height = 400 } = options;
// console.log(title);
// console.log(width);
// console.log(height);

// let options = {
//     title: "Menu"
// };
// let { width: w = 100, height: h = 200, title } = options;
// console.log(title);  // Menu
// console.log(w);      // 100
// console.log(h);      // 200

//          (3.2) Остаток объекта
// let options = {
//     title: 'Menu',
//     width: 100,
//     height: 200
// };
// // title = свойство с именем title
// // rest = объект с остальными свойствами
// let { title, ...rest } = options;
// // сейчас title = "Menu", rest = {height: 200, width: 100}
// console.log(rest.height);  // 200
// console.log(rest.width);   // 100

//          (3.3) Вложенная деструктуризация объектов
// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ['Cake', 'Donat'],
//     extra: true
// };
// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'Menu'
// } = options;
// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200
// console.log(item1);  // Cake
// console.log(item2);  // Donut


//          (4) Копирование объектов
//          (4.1) Поверхностное копирование
// const itemInCart = [
//     { product: 'Носки', quantity: 5 },
//     { product: 'Джинсы', quantity: 2 },
//     { product: 'Куртки', quantity: 1 }
// ];
// // const cloneCart = [...itemInCart];
// // cloneCart[1].quantity = 10;

// //          (4.2) Глубокое копирование
// // Можно воспользоваться готовой библиотекой. Например, функцию глубокого копирования содержит популярная библиотека утилит lodash.
// // Самый быстрый способ глубокого копирования звучит глупо — нужно сериализовать копируемый объект в JSON и тут же распарсить его.
// const deep = JSON.parse(JSON.stringify(itemInCart));
// console.log(itemInCart[1] === deep[1]);  // false



//          (5) Map & Set





















