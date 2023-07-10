function solve (x, y) {
    function calculateFactorial(x) {
        let sum = 1;

        for (let index = 1; index <= x; index++) {
            sum *= index;   
        }
        
        return sum;
    }

    let sumX = calculateFactorial(x);
    let sumY = calculateFactorial(y);
    
    let division = sumX / sumY;
    console.log(division.toFixed(2));
}

solve(6, 2)