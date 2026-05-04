function isDuplicate(list, id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] === id) {
            return true;
        }
    }
    return false;
}

console.log(isDuplicate([101, 102, 103], 102));