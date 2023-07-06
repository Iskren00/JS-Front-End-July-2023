function solve (number) 
{
    let sum = 0;
    let numberAsString = number.toString();

    for (let index = 0; index < numberAsString.length; index++) {
       sum += Number(numberAsString[index]);
    }
    
    console.log(sum);
}

solve(543)