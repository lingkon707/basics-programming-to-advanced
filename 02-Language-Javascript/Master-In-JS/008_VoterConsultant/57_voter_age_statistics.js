var voters = [
    { age: 20 },
    { age: 35 },
    { age: 60 }
];

function averageAge(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i].age;
    }
    return sum / list.length;
}

console.log(averageAge(voters));