function addressBook(array) {
    let addressBook = {};

    for (let element of array) {
        let data = element.split(':');
        let name = data[0];
        let streetName = data[1];
        addressBook[name] = streetName;
    }

    let sortedAddressBook = Object.keys(addressBook).sort();

    for (let key of sortedAddressBook) {
        console.log(`${key} -> ${addressBook[key]}`)
    }
}