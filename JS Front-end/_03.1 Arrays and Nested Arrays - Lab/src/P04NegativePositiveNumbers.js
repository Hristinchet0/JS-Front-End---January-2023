function NegativePositiveNumbers(nums) {
    const result = [];

    for(let num of nums) {
        if (num < 0 ) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join("\n"));
}