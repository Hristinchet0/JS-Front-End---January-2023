function solve(text) {
    let characters = text.split("");
    let output = [];
    for (const symbol of characters) {

        const asciiCode = symbol.charCodeAt();

        if(asciiCode >= 65 && asciiCode <= 90) {
            if(output.length > 0) {
                output += ", ";
            }
            output += symbol
        } else {
            output += symbol;
        }
    }

    return output;
}

function solve2(text) {
    let splittedText = text.split("");
    let result = [];

    while (splittedText.length > 0) {
        let currentWord = "";
        currentWord += splittedText.shift();

        while (splittedText.length > 0 && splittedText[0] === splittedText[0].toLowerCase()) {
            currentWord += splittedText.shift();
        }
        result.push(currentWord);
    }
    console.log(result.join(", "));
}