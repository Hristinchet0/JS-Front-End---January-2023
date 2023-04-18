function solve (n, numbers) {
    let arr = [];
    for (let index = 0; index < n; index++) {
        arr.push(numbers[index]);
    }

    let reversed = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        reversed.push(arr[index]);
        
    }

    console.log(reversed.join(" "));
}
