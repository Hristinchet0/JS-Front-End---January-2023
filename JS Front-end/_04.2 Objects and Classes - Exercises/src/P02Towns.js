function towns(stringArray) {
    let town = {};

    for (let element of stringArray) {
        let info = element.split(" | ");
        town.town = info[0];
        town.latitude = parseNumbers(Number(info[1]));
        town.longitude = parseNumbers(Number(info[2]));
        console.log(town);
    }

    function parseNumbers(number) {
        return number.toFixed(2);
    }
}