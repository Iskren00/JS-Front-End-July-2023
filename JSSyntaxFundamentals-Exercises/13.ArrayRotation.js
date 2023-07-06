function solve (arr, rotations)
{
    let firstNumber = 0;

    for (let index = 0; index < rotations; index++) 
    {
        firstNumber = arr[0];
        arr.shift()
        arr.push(firstNumber);
    }

    console.log(arr.join(' '))
}

solve ([51, 47, 32, 61, 21], 2);