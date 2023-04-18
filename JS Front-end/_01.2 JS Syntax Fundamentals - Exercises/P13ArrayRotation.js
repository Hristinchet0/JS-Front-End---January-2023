function solve(array, rotation) {

    while (rotation > 0) {
        let currentNumber = array.shift();
        array.push(currentNumber);
        rotation--;
    }
    console.log(array.join(" "));
}