let strArray = ["I","am","suresh","from","chennai"];
let titleCaps = (array) => {
    let new_array = array.map((x => x = x.charAt(0).toUpperCase() + x.slice(1) ));
    console.log(new_array)
}

titleCaps(strArray)