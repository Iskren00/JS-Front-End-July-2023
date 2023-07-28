function getInfo() {
    const stopBusID = document.querySelector("#stopId").value;
    const list = document.querySelector('ul');
    const stopName = document.querySelector("#stopName")

    list.innerHTML = "";

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopBusID}`)
        .then((res) => res.json())
        .then((busStop) => {
            stopName.textContent = busStop.name;

            Object.entries(busStop.buses).map(([busNumber, time]) => {
                const item = document.createElement("li");
                item.textContent = `Bus ${busNumber} arrives in ${time} minutes`;

                list.appendChild(item);
            })
        })
        .catch(() => {
            stopName.textContent = "Error";
        })
}