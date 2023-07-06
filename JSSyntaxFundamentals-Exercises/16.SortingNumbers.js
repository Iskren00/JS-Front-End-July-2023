function solve (array)
{
    let newArray = [];
    const copyArray = [];
    let currNumber = 0;

    array.sort((a, b) => a - b);

    for (let index = 0; index < array.length; index++) {
        copyArray.push(array[index]);
    }

    for (let index = 0; index < copyArray.length; index++) {
        if (index === 0 || index % 2 === 0) {
            currNumber = array[0];
            array.shift();
            newArray.push(currNumber);
        } else {
            currNumber = array[array.length - 1];
            array.pop();
            newArray.push(currNumber);
        }      
    }

    return newArray;
}

solve([1,65, 3, 52, 48, 63, 31, -3, 18, 56]);