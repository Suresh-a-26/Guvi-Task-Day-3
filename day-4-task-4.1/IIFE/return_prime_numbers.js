let numArray = [1,2,4,11,25,7,0,103,113,115,337];

function isPrime(num){
    if(num === 0 || num === 1){
        return false;
    }
    else{
        if(num === 2){
            return true;
        }
        else{
            for(let i=2;i<num;i++){
                if(num%i === 0){
                    return false;
                }
            }
            return true;
        }
    }
}

let primeNumbers = (function(array){
    let arr = [];
   for(let num of array){
    if(isPrime(num)){
        arr.push(num);
    }
   }
   console.log(arr);
})(numArray);


