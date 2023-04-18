function solve(num1, num2) {
    let totalSum = 0;
    let allNumbers = [];

    for (let i = num1; i <= num2 ; i++) {
        totalSum += i;
        allNumbers.push(i);

    }
    console.log(allNumbers.join(" "))
    console.log(`Sum: ${totalSum}`);
}
