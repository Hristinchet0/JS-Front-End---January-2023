function subtract() {
    const firstInput = document.getElementById("firstNumber").value;
    const secondInput = document.getElementById("secondNumber").value;
    const result = document.getElementById("result");
  
    let firstNum = Number(firstInput);
    let secondNum = Number(secondInput);
  
    let resultNum = firstNum - secondNum;
  
    result.textContent = resultNum;
  }