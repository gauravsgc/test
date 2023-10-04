
        let arr = ["apple", "mango",
        "apple", "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        // console.log(unique.indexOf(arr[i]));
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
         }
    }
    return unique;
}
console.log(removeDuplicates(arr));
 