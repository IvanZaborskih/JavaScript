const removeExclamationMarks = (s) => s.split('').filter((n) => n != '!').join('');

// function removeExclamationMarks(s) {
//     let arr = s.split("");
//     arr = arr.filter(function (n) {
//         return n !== "!";
//     })
//     return arr.join("");
// }

console.log(removeExclamationMarks('Hello World!'));