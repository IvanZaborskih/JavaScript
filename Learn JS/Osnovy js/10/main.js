// let year = +prompt('What is my age?');
// if (year == 22) {
//     alert('You are right!');
// } else if (year > 22) {
//     alert('more')
// } else {
//     alert('less');
// }


// let a = +prompt();
// let b = +prompt();
// let c = a > b ? 'yes' : 'no';
// alert(c);


// let name = prompt('Какое официальное название javaScript?');
// if (name == 'ECMAScript') {
//     alert('Right');
// } else {
//     alert('Wrong!!!')
// }


// let value = prompt('Number: ');
// if (value > 0) {
//     alert(1);
// } else if (value < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }


// let resilt = (a + b < 4) ? 'little' : 'much';


let login = 'Директор';
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';
alert(message);