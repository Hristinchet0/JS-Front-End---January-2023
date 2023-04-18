function solve(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);

    let step = 0;
    let result = [];

    while (sorted.length > 0) {
        if(step % 2 === 0) {
            let firstElement = sorted.shift();
            result.push(firstElement);
        } else {
            let lastElement = sorted.pop();
            result.push(lastElement);
        }
        step++;
    }

    return result;
}
//
// console.log(
//     solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

function solve2(numbers) {
    let descArr = [...numbers].sort((a,b) => b - a);

    let ascArr = [...numbers].sort((a, b) => a - b);

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0) {
            result.push(ascArr.shift());
        } else {
            result.push(descArr.shift());
        }
    }
    return result;
}
