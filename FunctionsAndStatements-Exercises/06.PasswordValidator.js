function solve(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!password.match("^[A-Za-z0-9]+$")) {
        console.log("Password must consist only of letters and digits")
        isValid = false;
    }

    const digits = password.match(/\d/g);

    if (!digits || digits.length < 2) {
        console.log("Password must have at least 2 digits")
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid")
    }
}

solve('MyPass123');
