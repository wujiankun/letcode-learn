function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let flag = arr.splice(middle,1)[0];
    let left=[],right=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<flag){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([flag],quickSort(right));
}

let target=[4,3,6,7,2,88,12,5,2,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,3,6,7,2,88,12,5,1];

console.time('======');
console.log('last:',quickSort(target));
console.timeEnd('======');