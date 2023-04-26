function sumFirstLast(numsAsString) {
    let first = [...numsAsString].shift();
    let last = [...numsAsString].pop();

    const sum = Number(first) + Number(last);
    console.log(sum)
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);