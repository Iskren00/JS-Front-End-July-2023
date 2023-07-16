function solve (input) {
    let words = input.split(" ");
    let oddOccurences = [];

    oddOccurences = words.reduce((acc, curr) => {       
        curr = curr.toLowerCase();
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }

        return acc;
    }, {})

    let finalArray = [];

    Object.entries(oddOccurences)
    .sort(([, a], [, b]) => b - a)
    .forEach(([key, value]) => {
      if (value % 2 === 1) {
        finalArray.push(key.toString());
      }
    }); 

    console.log(finalArray.join(" "));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');