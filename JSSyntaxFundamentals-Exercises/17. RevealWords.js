function solve (words, text) 
{
    let array = words.split(", ");

    let replacedText = text;

    for (const word of array) {
      let temp = "*".repeat(word.length);
      replacedText = replacedText.replace(temp, word);
    }
  
    console.log(replacedText);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages')