function solve() {
    const departButton = document.querySelector("#depart");
    const arriveButton = document.querySelector("#arrive");
    const textArea = document.querySelector("span");

    let busInfo = {
        name: "",
        next: "depot"
    };

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${busInfo.next}`)
        .then((res) => res.json())
        .then((busToArrive) => {
            departButton.disabled = true;
            arriveButton.disabled = false;

            busInfo = busToArrive;
            textArea.textContent = `Next stop ${busInfo.name}`
        })
        .catch(() => {
            departButton.disabled = false;
            arriveButton.disabled = false;
            textArea.textContent = "Error";
        })
    }

    async function arrive() {
        departButton.disabled = false;
        arriveButton.disabled = true;

        textArea.textContent = `Arriving at ${busInfo.name}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();