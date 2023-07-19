function solve() {
  const input = document.querySelector("#input").value.split(".");
  input.pop();
  const container = document.querySelector("#output");


  while (input.length > 0) {
    const p = document.createElement("p");
    container.appendChild(p);
    p.textContent = `${input.splice(0, 3).join('.')}.`;
  }
}