function solve() {
   const searchInput = document.getElementById('searchField');
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedWord = searchInput.value;
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));

      for (const row of tableRows) {
         let trimmedTextContent = row.textContent.trim();

         if (row.classList.contains('select')) {
            row.classList.remove('select');
         }

         if (trimmedTextContent.includes(searchedWord)) {
            row.classList.add('select');
         }
      }

      searchInput.value = '';
   }
}

// function solve() {

//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    const rows = document.querySelectorAll('tbody tr');
//    const input = document.getElementById('searchField');

//    function onClick() {
//       for (const row of rows) {
//          row.classList.remove('select');

//          if (row.innerHTML.includes(input.value)) {
//             row.classList.add('select');
//          }
//       }
//       input.value = '';
//    }
// }