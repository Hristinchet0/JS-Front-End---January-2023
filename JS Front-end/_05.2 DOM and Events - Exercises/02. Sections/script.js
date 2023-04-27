function create(words) {
   const content = document.getElementById('content');
   

   for (const word of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      newParagraph.textContent= word;
      newParagraph.style.display = 'none';

      newDiv.addEventListener('click', () => {
         newParagraph.style.display = 'block';
      })

      //Attaching to DOM tree
      newDiv.appendChild(newParagraph);
      content.appendChild(newDiv);
   }

   // function clickEventHandler(event) {
   //    const div = event.currentTarget;
   //    const p = div.children[0]; // const p - div.firstChild;
   //    p.style.display = 'block';
   // }

}