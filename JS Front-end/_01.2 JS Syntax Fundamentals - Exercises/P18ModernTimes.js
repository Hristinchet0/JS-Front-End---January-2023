function solve(text) {
    let words = text.split(" ");
    let result = [];

    for(const word of words) {
        if(word.startsWith("#") && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }

    console.log(result.join("\n"));

    function checkIfWordIsValid(myWord) {
        let myWordLowerCase = myWord.toLowerCase().slice(1);

        let isValid = true;

        for (const symbol of myWordLowerCase) {
            let asciiCode = symbol.charCodeAt(0);
            if(!(asciiCode >= 97 && asciiCode <= 122)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}


function solve2(text) {
    function containsOnlyLetters(word) {
        return [...word.toLowerCase()]
            .slice(1)
            .map((symbol) => symbol.charCodeAt(0))
            .every((charCode) => charCode >= 97 && charCode <= 122);
    }

    return text.split(" ")
        .filter((word) => word.startsWith("#") && containsOnlyLetters(word))
        .map((word) => word.slice(1))
        .filter((word) => word !== "")
        .join("\n");

}