function city(city) {
    let keysAndValues = Object.entries(city);
    // for( const key of keys) {
    //     console.log(`${key} -> ${city[key]}`);
    // }

    for (const [key, value] of keysAndValues) {
        console.log(`${key} -> ${value}`)
    }
}

city({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
)