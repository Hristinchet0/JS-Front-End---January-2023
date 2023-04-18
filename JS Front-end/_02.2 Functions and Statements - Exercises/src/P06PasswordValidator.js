function passwordValidator(password) {
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

    let isPassValid = true;

    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isPassValid = false;
    }

    if (!hasOnlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits");
        isPassValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isPassValid = false;
    }

    if (isPassValid) {
        console.log("Password is valid");
    }
}


// Example regex
// let text = "Password must be between 6 and 10 characters least 2 digits";
//
// let regex = /\d+/g;
// let execution = regex.exec(text);
//
// while (execution !== null) {
//     let value = execution[0];
//     console.log(value);
//     execution = regex.exec(text);
// }