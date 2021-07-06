/**
 * @param {number[]} nums
 */
const removeDuplicates = function (nums) {
    if (!Array.isArray(nums) || !nums) return -1;
    if (nums.length <= 1) return nums.length;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            if (nums[i] !== nums[j]) {
                // console.log("do copy from " + j + "to " + i);
                nums[i] = nums[j];
            }
        }
    }
    return {length:i + 1,target:nums};
};
let target = [1,2,2,2,2,2,3,4,4,4,4,8];

console.log(removeDuplicates(target));
