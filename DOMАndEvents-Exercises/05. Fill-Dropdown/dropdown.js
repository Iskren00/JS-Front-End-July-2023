function addItem() {
    const text = document.querySelector("#newItemText");
    const value = document.querySelector("#newItemValue");

    const option = document.createElement('option')
    option.textContent = text.value;
    option.setAttribute('value', value.value);

    const select = document.querySelector("#menu");
    select.appendChild(option);
    text.value = '';
    value.value = '';
};