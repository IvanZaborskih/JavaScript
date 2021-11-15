const encryptThis = (text) => {
    let textArr = text.split(' ');
    console.log(textArr);
    // console.log(text.charCodeAt());
    for (let i = 0; i < textArr.length; i++) {
        let chars = textArr[i].split('');
        let cryptFirstLetter = chars[0].charCodeAt(0);

        if (chars.length === 1) {
            textArr[i] = cryptFirstLetter;
        } else if (chars.length === 2) {
            textArr[i] = cryptFirstLetter + chars[1];
        } else {
            let repl = [chars[1], chars[chars.length - 1]];
            textArr[i] = cryptFirstLetter + repl[1] + textArr[i].slice(2, chars.length - 1) + repl[0];
        }
    }

    return textArr.join(' ');
}

// console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));     // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// console.log(encryptThis("The more he saw the less he spoke"));
// console.log(encryptThis("The less he spoke the more he heard"));
// console.log(encryptThis("Why can we not all be like that wise old bird"));