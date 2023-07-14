function solve(array1, array2) {

    let array = [...array1, ...array2];

    const store = array.reduce((acc, curr, index) => {

        if (index % 2 === 0) {
            
            if (!acc[curr]) {
                acc[curr] = 0;
            } 
            
            acc[curr] += Number(array[index + 1]);
        }

        return acc;
    }, {});

    Object.keys(store).forEach((key) => {
        console.log(`${key} -> ${store[key]}`);
    });
}

solve([ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], 
[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]);