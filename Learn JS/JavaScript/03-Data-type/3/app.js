"use strict";
//      Кавычки
// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// console.log(guestList);


//      Спецсимволы
// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList);

// let str1 = "Hello\nWorld";
// let str2 = `Hello
// World`;
// console.log(str1 == str2);    // true


//      Доступ к символам
// let str = 'Hello';
// console.log(str[0]);
// console.log(str.charAt(0));
// for (let char of str) {
//     console.log(char);
// }
// console.log(str[0].toLowerCase());


//      Поиск подстроки
// let str = 'Widget with id';
// console.log(str.indexOf('id'));      // возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений
// console.log(str.indexOf('id', 4));   // Необязательный второй аргумент позволяет начать поиск с определённой позиции

// let str = 'Ослик Иа-Иа хороший';
// let target = 'Иа';
// let pos = 0;
// while (true) {
//     let result = str.indexOf(target, pos);
//     if (result === -1) {
//         break;
//     }
//     console.log('Позиция совпадения = ', result);
//     pos = result + 1;
// }

// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу
// let str = 'zahjkdaz';
// console.log(str.lastIndexOf('z'));


//      includes, startsWith, endsWith
// let str = 'Zaborskikh.';
// console.log(str.includes('ski'));   // true
// console.log(str.startsWith('Za'));  // true
// console.log(str.endsWith('.'));     // true


//      Получение подстроки
// let str = '0123456789';
// console.log(str.slice(0, 4));           // 0123     Возвращает часть строки от start до (не включая) end
// console.log(str.slice(1));              // 123456789    Если аргумент end отсутствует, slice возвращает символы до конца строки
// /* Также для start/end можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов с конца строки */

// console.log(str.substring(1, 6));       // 12345    Возвращает часть строки между start и end
// console.log(str.substring(6, 1));       // 12345    почти то же, что и slice, но можно задавать start больше end

// console.log(str.substr(4, 3));          // 456      Возвращает часть строки от start длины length.


//      Сравнение строк
// console.log('a'.codePointAt(0));        // Возвращает код для символа, находящегося на позиции pos
// console.log('A'.codePointAt(0));
// console.log(String.fromCodePoint(97));  // Создаёт символ по его коду code
// console.log(String.fromCodePoint(65));


//      Задачи
// function ucFirst(str) {
//     return str = str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst('hello'));


// function checkSpam(str) { // viagra
//     if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));


// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         str = str.slice(0, maxlength - 1) + '…';
//     }
//     return str;
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Вот, что мне", 20));


function extractCurrencyValue(price) {
    return Number(price.slice(1));
}
console.log(extractCurrencyValue('$120'));



