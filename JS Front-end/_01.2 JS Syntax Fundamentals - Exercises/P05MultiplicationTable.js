function solve (number) {
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = number * i;
        console.log(number + " X " + i + " = " + result)
    }
}
