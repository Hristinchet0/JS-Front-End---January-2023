function solve(arrayNumbers) {
  let evenNumbersSum = 0;
  let oddNumbersSum = 0;

  for (let index = 0; index < arrayNumbers.length; index++) {
    arrayNumbers[index] = Number(arrayNumbers[index]);
    let currentNumber = arrayNumbers[index];

    if (currentNumber % 2 === 0) {
      evenNumbersSum += currentNumber;
    } else {
      oddNumbersSum += currentNumber;
    }
  }

  let differenceSum = evenNumbersSum - oddNumbersSum;

  console.log(differenceSum);
}

