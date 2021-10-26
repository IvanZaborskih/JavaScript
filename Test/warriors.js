function Warrior(name, hp) {
    this.name = name;
    this.hp = hp;
}

function getDamage() {
    console.log(`${warrior1.name} атакует!`);
    warrior2.hp--;
    console.log(`${warrior2.name} получает -1hp и у него остается ${warrior2.hp} здоровья...\n===========================`);
    if (warrior2.hp === 0) {
        return `${warrior1.name} победил!`
    }
    console.log(`${warrior2.name} атакует!`);
    warrior1.hp--;
    console.log(`${warrior1.name} получает -1hp и у него остается ${warrior1.hp} здоровья...\n===========================`);
    if (warrior1.hp === 0) {
        return `${warrior2.name} победил!`
    }
}

let warrior1 = new Warrior('Nygra', 5);
let warrior2 = new Warrior('Loran', 3);

for (let i = 0; i < 1000; i++) {
    let winner = getDamage();
    if (warrior1.hp === 0 || warrior2.hp === 0) {
        console.log(winner);
        break;
    }
}