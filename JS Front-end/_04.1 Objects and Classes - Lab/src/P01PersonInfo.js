function personInfo(firstName, lastName, age) {
    age = Number(age);
    // let person = {firstName: firstName, lastName: lastName, age: age};
    let person = {firstName, lastName, age};
    return person;
}