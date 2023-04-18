function solve(word, text) {

    return text.toLowerCase()
        .split(" ")
        .some((w) => w === word.toLowerCase()) ? word : `${word} not found!`;
}

function solve2(word, text) {
    let wordToLowerCase = word.toLowerCase();
    let textArr = text.split(" ");

    for (const text of textArr) {
        if(text.toLowerCase() === wordToLowerCase) {
            return word;
        }
    }

    return `${word} not found!`;
}