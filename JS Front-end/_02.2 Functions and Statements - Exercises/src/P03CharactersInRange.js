function charactersInRange(firstChar, secondChar) {
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);

    let firstCharInAscii =getFirstCharAsciiCode(firstChar);
    let secondCharInAscii = getFirstCharAsciiCode(secondChar);

    let minAscii = Math.min(firstCharInAscii, secondCharInAscii);
    let maxAscii = Math.max(firstCharInAscii, secondCharInAscii);

    let chars = [];

    for (let i = minAscii + 1; i < maxAscii; i++) {
        chars.push(String.fromCharCode(i))
    }

    return chars.join(" ");
}