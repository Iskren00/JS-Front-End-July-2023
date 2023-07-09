function solve (number) {
    let oddSum = 0;
    let evenSum = 0;

    number = number.toString();
    
    for (let index = 0; index < number.length; index++) {
        let num = Number(number[index]);
        
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(3495892137259234);