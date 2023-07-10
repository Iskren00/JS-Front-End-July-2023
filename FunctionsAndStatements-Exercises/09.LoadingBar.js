function solve (percent) {
    let loadingBar = '';

    for (let index = 0; index < 100; index += 10) {
        if (percent > index) {
            loadingBar += '%';
        } else {
            loadingBar += '.';
        }       
    }

    if (percent === 100) {
        console.log("100% Complete!");
        console.log(`[${loadingBar}]`);
    } else {
        console.log(`${percent}% [${loadingBar}]`);
        console.log("Still loading...");
    }
}

solve(30);