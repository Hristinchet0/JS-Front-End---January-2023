function solve(number, operator1, operator2, operator3, operator4, operator5) {

    number = Number(number);
    let arrayInput = [operator1, operator2, operator3, operator4, operator5];

    for (let i = 0; i < arrayInput.length; i++) {

        let currentOperator = arrayInput[i];
        switch (currentOperator) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3
                console.log(number);
                break;
            case "fillet":
                number -= number * 0.2;
                console.log(number);
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');