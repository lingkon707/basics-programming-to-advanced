function paginate(list, page, size) {
    var start = (page - 1) * size;
    return list.slice(start, start + size);
}

console.log(paginate([1,2,3,4,5,6], 2, 2));