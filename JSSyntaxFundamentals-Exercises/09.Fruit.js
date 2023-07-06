function solve(fruit, weightInGrams, price) 
{
    let weightInKilograms = weightInGrams / 1000;
    let sumPrice = weightInKilograms * price

    console.log(`I need $${sumPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve("apple", 2500, 1.80)