// Две ссылки
// let user = {
//     name: "John"
// };

// let admin = user;

// console.log(user, admin);

// admin = null;
// console.log(user, admin);


// Взаимосвязанные объекты
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

let family = marry({
    name: 'John',
}, {
    name: 'Ann',
});

console.log(family);
delete family.father;
delete family.mother.husband;
console.log(family);

family = null;
console.log(family);

