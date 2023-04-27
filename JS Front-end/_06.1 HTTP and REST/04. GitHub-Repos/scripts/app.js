function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const resultContainer = document.getElementById('res');

   // const fetchAllRepos = fetch(BASE_URL, { method: 'GET'}); //Promise
   // fetchAllRepos.then((res) => res.json())
   //.then((data) => {
   //    resultContainer.textContent = data;
   // })
   //.catch((err) => {
   //    console.error(err);
   // });

   
   fetch(BASE_URL, { method: 'GET'})
   .then((res) => res.text()) //res.json();
   .then((data) => {
      resultContainer.textContent = data;
   })
   .catch((err) => { 
      console.error(err);
   });
}