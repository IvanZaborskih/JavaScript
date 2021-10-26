// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//     alert(i);
// }



// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }



// //my
// while (true) {
//     let value = prompt('Number > 100 : ');

//     if (value > 100 || value == null) {
//         // alert('Right');
//         break;
//     } else {
//         alert('Wrong');
//     }
// }
// let num;
// do {
//     num = prompt('Number > 100 : ');
// } while (num <= 100 && num);
// let aaa = prompt();



let n = 20;

nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}