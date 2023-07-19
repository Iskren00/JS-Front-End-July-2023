function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const checkRadio = e.currentTarget.parentElement.querySelector('input[type="radio"]');

            if (checkRadio.checked) {
                return;
            }

            const hidenInfo = e.currentTarget.parentElement.querySelector('div');

            if (hidenInfo.style.display !== "block") {
                hidenInfo.style.display = "block"
                button.textContent = "Hide it";
            } else {
                hidenInfo.style.display = "none"
                button.textContent = "Show more";
            }
        });
    })
}