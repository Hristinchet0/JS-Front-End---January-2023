function plantDiscovery(input) {
    let n = Number(input.shift());

    let plantsObject = {};

    for (let i = 0; i < n; i++) {
        let plant = input.shift();
        let [plantName, rarity] = plant.split('<->');

        plantsObject[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        }
    }

    let command = input.shift();

    while (command != 'Exhibition') {

        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(" - ");

        if (!plantsObject[plantName]) {
            console.log("error");
        } else {
        switch (commandName) {
            case "Rate":
                let rating = Number(argument);
                plantsObject[plantName].ratings.push(rating);
                break;
            case "Update":
                let rarity = Number(argument);
                plantsObject[plantName].rarity = rarity;
                break;
            case "Reset":
                plantsObject[plantName].ratings = [];
                break;
        }
    }

        command = input.shift();
    }

    console.log("Plants for the exhibition:")
    for (const plant in plantsObject) {
        let sum = 0;
        let count = plantsObject[plant].ratings.length;
        for (const rating of plantsObject[plant].ratings) {
            sum += rating;
        }

        let averageRating = sum / count;

        let rarity = plantsObject[plant].rarity;

        if (!averageRating) { //NaN
            averageRating = 0;
        }

        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}

plantDiscovery
    (["3",
        "Arnoldii<->4",
        "Woodii<->7",
        "Welwitschia<->2",
        "Rate: Woodii - 10",
        "Rate: Welwitschia - 7",
        "Rate: Arnoldii - 3",
        "Rate: Woodii - 5",
        "Update: Woodii - 5",
        "Reset: Arnoldii",
        "Exhibition"])
