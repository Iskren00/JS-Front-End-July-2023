function solve(input) {

    let movies = [];

    input.forEach((command) => {

        if (command.includes("addMovie")) {
            let [_, name] = command.split("addMovie ");
            
            movies.push({
                name,
            })           
        } else if (command.includes("directedBy")) {
            let [name, directorName] = command.split(" directedBy ");

            const movie = movies.find((m) => m.name === name);

            if(movie) {
                movie.director = directorName;
            }
        } else if (command.includes("onDate")) {
            let [name, date] = command.split(" onDate ");

            const movie = movies.find((m) => m.name === name);

            if(movie) {
                movie.date = date;
            }
        }
    });   
    
    movies
    .filter((m) => m.name && m.director && m.date)
    .forEach((m) => console.log(JSON.stringify(m)));
}
       

solve([ 'addMovie The Avengers', 'addMovie Superman',
 'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
   'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo' ]);