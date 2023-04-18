function perfectNumber(number) {
    let divisors = [];

    for (let currentNum = 0; currentNum <= Math.floor(number / 2); currentNum++) {
        if (number % currentNum === 0) {
            divisors.push(currentNum);
        }
    }

    let divisorsSum = divisors.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    if (number === divisorsSum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

function perfectNumber2(number) {
    let sum = 0;
    for (let i = 0; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (number === sum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}