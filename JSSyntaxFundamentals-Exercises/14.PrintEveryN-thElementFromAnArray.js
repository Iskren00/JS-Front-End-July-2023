function solve (arr, n) 
{
    let arrayWithTheNthNumbers = [];

    for (let index = 0; index < arr.length; index += n) {      
        arrayWithTheNthNumbers.push(arr[index]);
    }

    return arrayWithTheNthNumbers;
}

solve(['5', '20', '31', '4', '20'], 2);