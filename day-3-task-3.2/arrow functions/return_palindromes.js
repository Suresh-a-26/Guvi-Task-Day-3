let strArray = ["suresh","level","mom","lucky","see","dad"]

function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    if(word == reversedWord){
        return true;
    }
    else{
        return false;
    }
}

let palindrome_AF = (array)=>{
    let arr = [];
    for(let word of array){
        if(isPalindrome(word)){
            arr.push(word);
        }
    }
    console.log(arr);
}

palindrome_AF(strArray);
