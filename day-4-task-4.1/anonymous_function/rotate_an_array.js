let array1 = [1,2,3,4,5,6,7,8];
let k = 3;
let len = array1.length;
let times = k%len;


let rotate = function(array,t){
    console.log(array.concat(array.splice(0,t)));
}
rotate(array1,times);