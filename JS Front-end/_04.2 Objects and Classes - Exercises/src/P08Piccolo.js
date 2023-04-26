function piccolo(input) {
    let parkingLot = new Set();
    for (let inputElement of input) {
        let info = inputElement.split(', ');
        let direction = info[0];
        let carNumber = info[1];
        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }
    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sorted = Array.from(parkingLot)
            .sort((l, r) => l.localeCompare(r))
            .forEach(e => console.log(e));
    }
}