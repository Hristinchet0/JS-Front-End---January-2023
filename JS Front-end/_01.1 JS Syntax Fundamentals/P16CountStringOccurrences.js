function solve(text, searchedWord) {
    let words = text.split(" ");
    let count = 0;

    for (const word of words) {
        if (word === searchedWord) {
            count++;
        }
    }

    console.log(count);
}