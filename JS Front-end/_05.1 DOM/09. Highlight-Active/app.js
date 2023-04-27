function focused() {
    Array.from(document.querySelectorAll('input'))
    .forEach(i=>{
      i.addEventListener('focus',onFocus);
      i.addEventListener('blur',onBlur);
  });
    function onFocus(ev){
     ev.target.parentElement.className='focused';
    }
    function onBlur(ev){
      ev.target.parentElement.className='';
    }
  
  }

  function focused1() {
    const allInputs = Array.from(document.getElementsByTagName('input'));

    for (const input of allInputs) {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    }

    function handleFocus(event) {
      const currentInput = event.target;
      const parentDiv = currentInput.parentElement;
      parentDiv.classList.add('focused');
    }

    function handleBlur(event) {
      const currentInput = event.target;
      const parentDiv = currentInput.parentElement;

      if(parentDiv.classList.contains('focused')) {
        parentDiv.classList.remove('focused');
      }
    }
  }