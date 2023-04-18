function SignCheck (...numbers) {
    return numbers
        .filter((num) => num < 0)
        .length % 2 === 0 ? "Positive" : "Negative";
}