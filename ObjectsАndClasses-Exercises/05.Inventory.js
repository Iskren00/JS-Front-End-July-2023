function solve(input) {
    let heroes = [];

    input.forEach((line) => {
        let info = line.split(" / ")
        let items = info[2].split(", ")
        
        heroes.push({
            heroName: info[0],
            heroLevel: Number(info[1]),
            heroItems: items,
        });
    })

    const sortedHeroes = heroes.sort((a, b) => parseFloat(a.heroLevel) - parseFloat(b.heroLevel));

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.heroName}`)
        console.log(`level => ${hero.heroLevel}`)
        console.log(`items => ${(hero.heroItems).join(', ')}`)
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])