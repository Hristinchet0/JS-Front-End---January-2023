function evenPositionElement(input) {
    let result ="";

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            result += input[i]
            result += " ";
        }
    }

    console.log(result);
}

function evenPositionElement1(input) {
    let result =[];

    for (let i = 0; i < input.length; i+=2) {
        result[result.length] = input[i];
    }

    console.log(result.join(" "));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);

evenPositionElement1(['20', '30', '40', '50', '60']);
evenPositionElement1(['5', '10']);
