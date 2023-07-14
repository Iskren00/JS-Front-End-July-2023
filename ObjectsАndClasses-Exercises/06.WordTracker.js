function solve(input) {

    let words = input[0].split(' ');

    let tracker = words.reduce((acc, curr) => {
            acc[curr] = 0;
            return acc;
    }, {});

    input.shift();

    for (let index = 0; index < input.length; index++) {
        if (tracker.hasOwnProperty(input[index])) {
            tracker[input[index]]++;
        }
    }

    Object.entries(tracker)
    .sort(([, a], [, b]) => b - a)
    .forEach(([key, value]) => {
      console.log(`${key} - ${value}`);
    });  
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of', 'the', 
    'words', 'this', 'and', 'sentence', 'because', 
    'this', 'is', 'your', 'task'
    ])

    solve([
        'is the',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])