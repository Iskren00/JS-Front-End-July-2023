function solve (a, b) {
    let sum = 0;
    let arr = [ ];

    for (let index = a; index <= b; index++) {
        sum += index;
        arr.push(index);
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(0, 26);