function palindromeIntegers(numbers) {
    numbers
        .forEach((num) => {
            console.log(isPalindrome(num))
        });

    function isPalindrome(num) {
        let reversed = Number([...num.toString()].reverse().join(""));

        return num === reversed;
    }
}

function palindromeIntegers2(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join("")) === num;
    numbers
        .forEach((num) => {
            console.log(isPalindrome(num))
        });
}

function palindromeIntegers3(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join("")) === num;
    return numbers
        .map(isPalindrome)
        .join("\n")
}