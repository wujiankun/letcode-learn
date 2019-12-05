/*给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释:
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/


//====================分析=======================
//1.移动步数如果等于数组长度数相对于原数组没有任何变化.所以需要对步数针对数组长度取余
//2.外层循环steps次,内层循环进行数据前后复制

function rotate(nums,steps) {
    if(!!nums&&Array.isArray(nums)&&nums.length>1&&steps>0){
        //参数合法,继续操作
        let length = nums.length;
        //实际数组移动步数为steps对数组长度的取余,
        //因为移动步数如果等于数组长度数相对于原数组没有任何变化.
        let actStep = steps%length;
        //再进行actStep次循环,每次循环对数组数据进行前后复制
        for(let i=0;i<actStep;i++){
            let last = nums[length-1];
            for(let j=length-1;j>0;j--){
                nums[j] = nums[j-1]
            }
            nums[0] = last;
            console.log('step'+(i+1)+':'+nums);
        }
    }
}

let targetArr = [1,2,3,4,5,6,7];
let steps = 10;

rotate(targetArr,steps);

console.log('after rotate '+steps+':'+targetArr);
