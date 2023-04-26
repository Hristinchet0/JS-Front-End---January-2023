function processOddPositions(nums) {
    const result = nums
                .filter((x, i) => i % 2)
                .map(x => x * 2)
                .reverse();
    console.log(result.join(" "))
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3])
