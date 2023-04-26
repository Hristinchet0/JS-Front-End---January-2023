function biggerHalf(nums) {
    nums.sort((a,b) => a - b);
    const result = [];
    for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        result.push(nums[i]);
    }

    return result;
}