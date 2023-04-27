function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopNameContainer = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopId = stopIdInput.value;

    busesContainer.innerHTML = ''; //clear input value

    fetch(`${BASE_URL}${stopId}`)
    .then(response => response.json())
    .then((busInfo) => {
        const { name, buses } = busInfo;
        console.log(buses);
        stopNameContainer.textContent = name;
        for (const busId in buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`;
            busesContainer.appendChild(li);
        }

        stopIdInput.value = '';
    })
    .catch(() => {
        stopNameContainer.textContent = 'Error';
    })
}