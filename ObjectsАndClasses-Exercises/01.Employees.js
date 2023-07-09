function solve(employees) {
    let number = 0;

    for (const employee of employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);

    }
}

solve([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);