function solve (number) 
{
    let numberAsString = number.toString();
    let sum = Number(numberAsString[0]);
    let isSame = true;

    for (let index = 1; index < numberAsString.length; index++) {
       if (numberAsString[index] !== numberAsString[index - 1]) 
       {
            isSame = false
       }

       sum += Number(numberAsString[index])
    }
    
    console.log(isSame);
    console.log(sum);
}

solve(1234)