function solve(char1, char2) {
    let charArray = [ ];

    function getTheRange (a, b) {
        for (let index = a; index < b - 1; index++){
            charArray.push(String.fromCharCode(index + 1));    
        }
    }

    if (char1.charCodeAt() < char2.charCodeAt()) {
        getTheRange(char1.charCodeAt(), char2.charCodeAt());
    } else {
        getTheRange(char2.charCodeAt(), char1.charCodeAt());
    }

    console.log(charArray.join(' '))
}

solve('C', '#')