// let user = {
//     name: 'Ivan',
// }
// let newUser = {
//     name: 'Ivan',
// }
// console.log(user, newUser);
// console.log(user == newUser);


// Клонирование и объединение объектов, Object.assign
// let user = {
//     name: 'Ivan',
//     age: 22,
// };
// let clone = {};
// for (let key in user) {
//     clone[key] = user[key];
// }
// console.log(user);
// console.log(clone);
// clone.name = 'Goga';
// clone.age = 30;
// console.log(user);
// console.log(clone);

// let user = { name: 'Ivan', };
// let permission1 = {
//     canEdit: true,
//     name: 'Admin',
// };
// let permission2 = { canView: true, };
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permission1, permission2);
// console.log(user);

// let user = {
//     name: 'Ivan',
// };
// // Этот метод скопирует все свойства объекта user в пустой объект и возвратит его.
// let clone = Object.assign({}, user);


// Вложенное клонирование
// let user = {
//     name: 'Ivan',
//     age: 22,
//     sizes: {
//         height: 180,
//         wieght: 60,
//     },
// };
// console.log(user.sizes.height);

// // let clone = Object.assign({}, user);   //  скопирует неправильно, объект останется ссылкой на тот же (Простое клонирование)
// let clone = {};
// for (let key in user) {
//     if (typeof user[key] == 'object') {
//         clone[key] = Object.assign({}, user[key]);
//     } else {
//         clone[key] = user[key];
//     }
// } // скопирует как надо, склонировав объект (Глубокое клонирование)

// clone.name = 'Goga';
// user.sizes.wieght = 100;

// console.log('--------------------');
// console.log(user);
// console.log(clone);
// console.log(user.sizes === clone.sizes);