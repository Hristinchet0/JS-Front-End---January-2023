function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const busContainer = document.querySelector('#info > span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    let nextStopId = 'depot';
    let nextStopName = null;

    function depart() {
         arriveButton.disabled = false;
         departButton.disabled = true;
         fetch(BASE_URL + nextStopId)
         .then(response => response.json())
         .then((nextStopInfo) => {
            const { name, next} = nextStopInfo;
            busContainer.textContent = `Next stop ${name}`;
            nextStopId = next;
            nextStopName = name;
         })
         .catch(() => {
            busContainer.textContent = "Error";
            arriveButton.disabled = false;
            departButton.disabled = false;
         })
    }

    async function arrive() {
        arriveButton.disabled = true;
        departButton.disabled = false;
        busContainer.textContent = `Arriving at ${nextStopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();