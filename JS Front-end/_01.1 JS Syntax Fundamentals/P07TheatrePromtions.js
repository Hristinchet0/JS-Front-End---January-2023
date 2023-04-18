function solve(day, age) {
    let price;

    switch (day) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                price = 12;
                console.log(price + "$");
            } else if (age > 18 && age <= 64) {
                price = 18;
                console.log(price + "$");
            } else if (age > 64 && age <= 122) {
                price = 12;
                console.log(price + "$");
            } else {
                console.log("Error!")
            }
            break;

        case "Weekend":
            if (age >= 0 && age <= 18) {
                price = 15;
                console.log(price + "$");
            } else if (age > 18 && age <= 64) {
                price = 20;
                console.log(price + "$");
            } else if (age > 64 && age <= 122) {
                price = 15;
                console.log(price + "$");
            } else {
                console.log("Error!")
            }
            break;

        case "Holiday":
            if (age >= 0 && age <= 18) {
                price = 5;
                console.log(price + "$");
            } else if (age > 18 && age <= 64) {
                price = 12;
                console.log(price + "$");
            } else if (age > 64 && age <= 122) {
                price = 10;
                console.log(price + "$");
            } else {
                console.log("Error!")
            }
            break;
    }

}
