function meetings(array) {
    let meetings = {};

    for(let element of array) {
        let info = element.split(' ');
        let day = info[0];
        let person = info[1];

        if(meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)
    }
}