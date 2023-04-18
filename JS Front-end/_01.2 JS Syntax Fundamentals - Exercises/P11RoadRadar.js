function solve(kmH, area) {

    let limitKm = 0;

    switch (area) {
        case "motorway":
            limitKm = 130;
            break;
        case "interstate":
            limitKm = 90;
            break;
        case "city":
            limitKm = 50;
            break;
        case "residential":
            limitKm = 20;
    }

    let difference = Math.abs(kmH - limitKm);
    let status = "";

    if(difference <= 20) {
        status = "speeding";
    } else if (difference <= 40) {
        status = "excessive speeding";
    } else if (difference > 40) {
        status = "reckless driving";
    }

    if(kmH <= limitKm) {
        console.log(`Driving ${kmH} km/h in a ${limitKm} zone`);
    }

    if(kmH > limitKm) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limitKm} - ${status}`)
    }
}

solve(21, 'residential');