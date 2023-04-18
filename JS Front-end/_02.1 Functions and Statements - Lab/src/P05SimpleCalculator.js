function simpleCalculator(firstNum, secondNum, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    switch (operation) {
        case "add":
            return add(firstNum,secondNum);
        case "subtract":
            return subtract(firstNum,secondNum);
        case "divide":
            return divide(firstNum,secondNum);
        case "multiply":
            return multiply(firstNum,secondNum);
        default:
            console.log("Invalid Operation!");
            break;
    }
}

function simpleCalculator2(firstNum, secondNum, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const operatorMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
    }

    return operatorMap[operation](firstNum, secondNum);
}