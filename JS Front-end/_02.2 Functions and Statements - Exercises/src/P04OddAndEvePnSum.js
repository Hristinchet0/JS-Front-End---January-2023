function oddAndEvenSum (number) {

    let evenSum = 0;
    let oddSum = 0;

    let digits = String(number).split('');

    for (let i = 0; i < digits.length; i++) {
        if(digits[i] % 2 === 0) {
            evenSum += Number(digits[i]);
        } else {
            oddSum += Number(digits[i]);
        }
    }

    console.log("Odd sum = " + oddSum + ", Even sum = " + evenSum);
}

oddAndEvenSum(1000435);