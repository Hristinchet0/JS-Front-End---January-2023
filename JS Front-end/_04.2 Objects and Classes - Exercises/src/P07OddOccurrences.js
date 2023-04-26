function oddOccurrences(input) {
    let words = input.split(' ');
    let list = new Map();
    for (let el of words) {
        let word = el.toLowerCase().trim();
        if (list.has(word)) {
            list.set(word, list.get(word) + 1);
        } else {
            list.set(word, 1);
        }

    }
    let filteredArr = Array.from(list).filter(([key, value]) => {
        return Number(value) % 2 != 0;
    });
    let result = '';
    for (let [key, value] of filteredArr) {
        result += key + ' ';
    }
    console.log(result);
}