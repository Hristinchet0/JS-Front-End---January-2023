function AddAndSubtract(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (sum, num) => sum - num;

    return subtract(sum(firstNum, secondNum), thirdNum)
}

const AddAndSubtract2 = (firstNum, secondNum, thirdNum) => {
    const sum = (a, b) => a + b;
    const subtract = (sum, num) => sum - num;

    return subtract(sum(firstNum, secondNum), thirdNum);
}




