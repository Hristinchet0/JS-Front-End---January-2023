function employees(stringArray) {
    let employees = [];

    for (let element of stringArray) {
        employees.push({name: element, personalNumber: element.length});
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}