function removeDuplicate(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicate([1,2,2,3]));