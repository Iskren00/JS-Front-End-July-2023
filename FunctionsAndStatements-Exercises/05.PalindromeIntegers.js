function solve(array) {
    for (let index = 0; index < array.length; index++) {
        let numberForward = array[index];
        let numberBackward = '';
        let numberAsString = array[index].toString();

        for (let index = numberAsString.length - 1; index >= 0; index--) {
            numberBackward += numberAsString[index];     
        }
        
        if (numberForward === Number(numberBackward)) {
            console.log('true');
        } else {
            console.log('false')
        }
    }
}

solve([123, 323, 421, 121]);
solve([32,2,232,1010]);