function solve(towns) {
    for (let index = 0; index < towns.length; index++) {
        const element = towns[index];
        
        const arr = element.split(" | ")
        
        let town = 
        {
            town: arr[0],
            latitude: Number(arr[1]).toFixed(2),
            longitude: Number(arr[2]).toFixed(2),
        };

        console.log(town);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])