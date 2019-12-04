/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if(!Array.isArray(nums)||!nums) return -1;
    if (nums.length <= 1) return nums.length;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

let resultLen = removeDuplicates([1,2,3,4,4,4,4,8]);

console.log(resultLen);