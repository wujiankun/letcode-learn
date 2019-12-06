//数组向右旋转第二天复习
function rotate(nums,k){
    if(!!nums&&nums.length>0&&k>0){
        k = k%nums.length;
        reverse(nums,0,nums.length-1);
        reverse(nums,0,k-1);
        reverse(nums,k,nums.length-1);
    }
}

function reverse(nums,start,end){
    let count = Math.floor((end-start+1)/2);
    for(let i=0;i<count;i++){
        let temp = nums[start+i];
        nums[start+i] = nums[end-i];
        nums[end-i] = temp;
    }
}

let sampleArr = [3,4,5,34,3,,,23,,,];
rotate(sampleArr,5);
console.log(sampleArr);