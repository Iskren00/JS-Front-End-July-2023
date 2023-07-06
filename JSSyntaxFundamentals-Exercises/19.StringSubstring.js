function solve (word, text) {
    word = word.toLowerCase();
    let wordsArray = text.split(' ');

    for (const wordFromArray of wordsArray) 
    {
        if (word === wordFromArray.toLowerCase()) {
            console.log(word)
            return;
        }
    }

    console.log(`${word} not found!`);
}

solve ('python', 'JavaScript is the best programming language');