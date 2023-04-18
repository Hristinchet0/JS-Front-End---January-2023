function solve(groupOfPeople, typeOfGroup, day) {
    let totalPrice = 0;
    let pricePerDayPerPerson = 0;

    switch (typeOfGroup) {
        case "Students":
            if(day === "Friday") {
                pricePerDayPerPerson = 8.45;
            } else if (day === "Saturday") {
                pricePerDayPerPerson = 9.80;
            } else if (day === "Sunday") {
                pricePerDayPerPerson = 10.46;
            }

            if(groupOfPeople >= 30) {
                totalPrice = pricePerDayPerPerson * groupOfPeople - (pricePerDayPerPerson * groupOfPeople * 0.15);
            } else {
                totalPrice = pricePerDayPerPerson * groupOfPeople;
            }
            break;

        case "Business":
            if(day === "Friday") {
                pricePerDayPerPerson = 10.90;
            } else if (day === "Saturday") {
                pricePerDayPerPerson = 15.60;
            } else if (day === "Sunday") {
                pricePerDayPerPerson = 16;
            }

            if(groupOfPeople >= 100) {
                totalPrice = pricePerDayPerPerson * (groupOfPeople - 10);
            } else {
                totalPrice = pricePerDayPerPerson * groupOfPeople;
            }
            break;

        case "Regular":
            if(day === "Friday") {
                pricePerDayPerPerson = 15;
            } else if (day === "Saturday") {
                pricePerDayPerPerson = 20;
            } else if (day === "Sunday") {
                pricePerDayPerPerson = 22.50;
            }

            if(groupOfPeople >= 10 && groupOfPeople <= 20) {
                totalPrice = pricePerDayPerPerson * groupOfPeople - (pricePerDayPerPerson * groupOfPeople * 0.05);
            } else {
                totalPrice = pricePerDayPerPerson * groupOfPeople;
            }
            break;


    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40,
    "Regular",
    "Saturday"
);