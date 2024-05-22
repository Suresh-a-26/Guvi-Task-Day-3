let array_AF = [1,2,2,3,4,5,5,6,7,5];

let removeDuplicate= (function(arr) {
    let uniqueArr = [];
    for(let index in arr){
        if(!uniqueArr.includes(arr[index])){
            uniqueArr.push(arr[index]);
        }
        else{
            arr.splice(index,1);
        }
    }
    console.log(arr);
})(array_AF);