function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let preSelected = document.querySelectorAll('.select');
      for (let choice of preSelected) {
         choice.classList.remove('select');
      }

      let rowData = document.querySelectorAll('tbody tr');
      let rows = [];
      for (let item of rowData) {
         let under = item.children;
         let currRow = [];
         for (let j = 0; j < under.length; j ++) {
            currRow.push(under[j].textContent);
         }
         rows.push(currRow);
      }

      let target = document.getElementById('searchField').value;
      for (let k = 0; k < rows.length; k ++) {
         for (let l = 0; l < 3; l++) {
            if (rows[k][l].includes(target)) {
               rowData[k].classList.add('select');
               continue;
            }
         }
      }
      document.getElementById('searchField').value = "";
   }
}