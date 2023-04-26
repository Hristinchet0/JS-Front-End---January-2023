function convertToJSON(name, lastName, hairColor) {
    let personInfo = {name, lastName, hairColor};
    let data = JSON.stringify(personInfo);
    console.log(data)
}