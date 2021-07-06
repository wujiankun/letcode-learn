function insertSort(arr){
    if(arr.length>1){
        
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j>=0;j--){
                if(arr[j]<arr[j-1]){
                    let temp = arr[j-1];
                    arr[j-1] = arr[j];
                    arr[j] = temp;
                }
            }
           // console.log('now:',arr);
        }
    }
    return arr;
    // [object Number]
}
console.log('result',insertSort([3, 1, 8, 2, 5]));