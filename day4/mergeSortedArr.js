/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 *给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

 说明:

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 示例:

 输入:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 输出: [1,2,2,3,5,6]
 * */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    /**
     * 外层循环m+n次,分别记录两个数组的当前下标,比较当前下标对应的成员,
     * 如果nums1中的成员小,不做任何操作,
     * 否则,对调两个数组当前下标对应的成员,然后再对nums2进行排序,
     * 如果遇到nums1的当前成员为0
     * 则直接顺序复制nums2中的数据到nums1中
     * 每次操作 lastIdxOfNums1++
     */

    if(!!nums1&&!!nums2&&Array.isArray(nums1)&&nums1.length>=(m+n)) {
        let lastIdxOfNums1 = 0, lastIdxOfNums2 = 0;
        for (let i = 0; i < m + n; i++) {
            if (lastIdxOfNums1 >= m) {
                //如果遇到nums1的空位,则直接顺序复制nums2中的数据到nums1中
                nums1[lastIdxOfNums1] = nums2[lastIdxOfNums2];
                lastIdxOfNums2++;
            } else if (nums1[lastIdxOfNums1] > nums2[lastIdxOfNums2]) {
                let temp = nums1[lastIdxOfNums1];
                nums1[lastIdxOfNums1] = nums2[lastIdxOfNums2];
                nums2[lastIdxOfNums2] = temp;
                nums2.sort(function (a, b) {
                    return a - b;
                });
            }
            lastIdxOfNums1++;
        }
    }
};

let arr1 = [4,5,6,0,0,0],m = 3;
let arr2 = [1,2,3], n = 3;

merge(arr1,m,arr2,n);

console.log(arr1);
