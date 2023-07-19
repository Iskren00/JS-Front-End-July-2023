function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let result = document.querySelector("#searchField");
      const table = Array.from(document.querySelectorAll("tbody tr td"))

      table.forEach(row => {
         row.parentElement.classList.remove("select");
      })

      table.forEach(row => {
         if (row.textContent.includes(result.value)) {
            row.parentElement.classList.add("select");
         }

      })
      result.value = "";
   }
}