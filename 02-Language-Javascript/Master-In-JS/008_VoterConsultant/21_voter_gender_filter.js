function filterGender(list, gender) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].gender === gender) {
            result.push(list[i]);
        }
    }
    return result;
}