/**
 * 复习专用
 * */

function removeDuplicates(nums) {
    if(!nums||!Array.isArray(nums)){
        return -1;
    }
    let targetLength = nums.length;
    if(targetLength<2){
        return targetLength;
    }
    let left = 0;
    for(let right = 1;right<targetLength;right++){
        if(nums[left]!==nums[right]){
            //如果遇到左右指针指向的数据不相等,left++,然后 right指向的数据拷贝到left指向的位置
            //目的是把数据往左聚拢
            left++;
            if(nums[left]!==nums[right]){
                //做出优化,只有两个位置的数据不相等时,才进行赋值操作,避免无谓的复制
                nums[left] = nums[right];
            }
        }
    }
    //最后有效数组长度
    return left+1;
}

//测试

console.log(removeDuplicates([1,1,2,2,2,2,2,2,2,8,8,8,8,8,8]));