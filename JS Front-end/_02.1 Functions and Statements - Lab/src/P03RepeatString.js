function repeatString(text, n) {
    return text.repeat(n);
}

function repeatString2(string, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += string;
    }

    return result;
}