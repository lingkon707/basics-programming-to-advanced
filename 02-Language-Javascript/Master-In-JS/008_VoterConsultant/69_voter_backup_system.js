function backup(data) {
    return JSON.stringify(data);
}

console.log(backup({ voters: 500 }));