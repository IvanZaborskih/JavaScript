// let user = {
//     name: "John",
//     years: 30
// };
// let {name, years, isAdmin = false} = user;
// console.log(name);
// console.log(years);
// console.log(isAdmin);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    'asd': 1000
};

function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return null;
    }

    let topSalary = 0;
    let name;

    for (let [key, value] of Object.entries(salaries)) {
        if (value > topSalary) {
            topSalary = value;
            name = key;
        }
    }

    return name;
}

console.log(topSalary(salaries))