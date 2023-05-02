function needForSpeed(input) {
    let carsCount = input.shift();
    let result = new Map();

    for (const element of input) {
        if (element === "Stop") {
            break;
        }

        if (element.includes('|')) {
            let [car, millage, fuel] = element.split('|');


            result.set(car, []);
            result.get(car).push(Number(millage));
            result.get(car).push(Number(fuel));
        }

        if (element.includes(' : ')) {
            let tokens = element.split(' : ');
            let command = tokens[0];
            //[command, model, millage, fuel]
            if (command === "Refuel") {
                let givenCar = tokens[1];
                let givenFuel = Number(tokens[2]);

                let fuelSum = givenFuel + result.get(givenCar)[1];

                if (fuelSum > 75) {
                    result.get(givenCar)[1] = 75;
                    fuelSum -= 75;
                    console.log(`${givenCar} refueled with ${givenFuel - fuelSum} liters`);
                } else {
                    result.get(givenCar)[1] = fuelSum;
                    console.log(`${givenCar} refueled with ${givenFuel} liters`);
                }

            } else if (command === "Revert") {
                let givenCar = tokens[1];
                let givenKilometers = Number(tokens[2]);
                result.get(givenCar)[0] -= givenKilometers;
                if (result.get(givenCar)[0] < 10000) {
                    result.get(givenCar)[0] = 10000;
                } else {
                    console.log(`${givenCar} mileage decreased by ${givenKilometers} kilometers`);
                }
            } else if (command === "Drive") {

                let givenCar = tokens[1];
                let givenDistance = Number(tokens[2]);
                let givenFuel = Number(tokens[3]);

                if (result.get(givenCar)[1] >= givenFuel) {
                    result.get(givenCar)[1] -= givenFuel;
                    result.get(givenCar)[0] += givenDistance;
                    console.log(`${givenCar} driven for ${givenDistance} kilometers. ${givenFuel} liters of fuel consumed.`);
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }

                if (result.get(givenCar)[0] >= 100000) {
                    result.delete(givenCar);
                    console.log(`Time to sell the ${givenCar}!`);
                }
            }

        }
    }

    for (const [car, carInfo] of result) {
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`)
    }
}

needForSpeed(
    [
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]

)