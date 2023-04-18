function mathPower(num, power) {
    return num ** power;
}

function mathPower1(num, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= num;
    }

    return result;
}