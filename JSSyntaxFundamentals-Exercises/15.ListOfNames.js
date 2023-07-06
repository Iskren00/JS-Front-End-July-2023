function solve(arr) {
    
    let newArr = arr.sort((a, b) => a.localeCompare(b));

    for (let index = 0; index < newArr.length; index++) {
        console.log(`${index + 1}.${newArr[index]}`)       
    }
}

solve(["John", "Bob", "Christina", "Ema"])