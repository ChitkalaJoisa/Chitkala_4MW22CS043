function findMax(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
let arr2=[22,13,12,32]
let result=findMax(arr2)
console.log("Max element in array:",result)