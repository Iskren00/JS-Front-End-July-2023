function solve(input) {
    let parking = [];

    input.forEach((entry) => {
        let [command, number] = entry.split(", ");
        
        if (command === 'IN' && !parking.includes(number)) {        
            parking.push(number);
        } else if (command === "OUT" && parking.includes(number)) {
           
            let indexToRemove = parking.indexOf(number);
            parking.splice(indexToRemove, 1);
        }
    })
        
    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    let sortedParking = parking.sort();

    sortedParking.forEach((carNumber) => {
          console.log(carNumber);
    })
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);