// let age = prompt();

// if (age >= 14 && age <= 90) {
//     alert('age between 14 and 90')
// }


// if (!(age >= 14 && age <= 90)) {
//     alert('age not between 14 and 90')
// }
// if (age < 14 || age > 90) {
//     alert('age between 14 and 90')
// }


let login = prompt('Введите логин: ');

if (login == 'Admin') {
    let password = prompt('Введите пароль: ');

    if (password == 'я главный') {
        alert('Здравствуйте');
    } else if (password == '' || password == null) {
        alert('Отмена');
    } else {
        alert('Неверный пароль!');
    }

} else if (login == '' || login == null) {
    alert('Отмена');
} else {
    alert('Я вас не знаю!')
}