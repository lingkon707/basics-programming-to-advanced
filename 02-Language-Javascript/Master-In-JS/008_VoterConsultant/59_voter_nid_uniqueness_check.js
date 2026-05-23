var nids = ["N1", "N2", "N3"];

function isUnique(nid) {
    return nids.indexOf(nid) === -1;
}

console.log(isUnique("N4"));