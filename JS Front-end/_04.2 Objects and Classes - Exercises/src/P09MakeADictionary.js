function makeADictionary(input) {
    let dictionary = {};
    for (let inputElement of input) {
        let obj = JSON.parse(inputElement);
        let word = Object.keys(obj);
        dictionary[word] = obj;
    }
    let sorted = Object.keys(dictionary).sort((l, r) => l.localeCompare(r));
    for (let key of sorted) {
        console.log(`Term: ${key} => Definition: ${Object.values(dictionary[key])}`)
    }
}