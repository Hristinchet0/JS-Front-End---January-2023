function phoneBook(array) {
    let ascArray = {};
    for (let element of array) {
        let info = element.split(' ');
        let name = info[0];
        let phoneNumber = info[1];
        ascArray[name] = phoneNumber;
    }

    for (let key in ascArray) {
        console.log(`${key} -> ${ascArray[key]}`);
    }
}