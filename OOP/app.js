//      ИНКАПСУЛЯЦИЯ
// class Rectangle {
//     #width;
//     #height;

//     constructor(w, h) {
//         this.#width = w;
//         this.#height = h;
//     }

//     get width() {
//         return this.#width;
//     }

//     set width(value) {
//         if (value < 0) {
//             this.#width = 1;
//         } else {
//             this.#width = value;
//         }
//     }

//     calcArea() {
//         return this.#width * this.#height;
//     }
// }
// const rect1 = new Rectangle(10, 20);
// console.log(rect1.calcArea());
// rect1.width = -34;
// console.log(rect1);


// class User {
//     #username;
//     #password;
//     #userId;

//     constructor(username, password) {
//         this.#username = username;
//         this.#password = password;
//         // this.#userId = generateRandomId();
//     }

//     get username() {
//         return this.#username;
//     }

//     set username(value) {
//         this.#username = value;
//     }

//     get password() {
//         return this.#password;
//     }

//     set password(value) {
//         this.#password = value;
//     }

//     // get userId() {
//     //     return this.#userId;
//     // }
// }
// const user1 = new User('Ivan', 'Zaborskikh');
// console.log(user1);
// user1.username = 'qwe';
// console.log(user1);



//      НАСЛЕДОВАНИЕ