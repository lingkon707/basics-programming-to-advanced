
// Subject: iterable

let family = ["Dad", "Mom", "Brother", "Sister", "Me"]
for (let member of family) {
  console.log(member)
}

let name = "Family"
for (let letter of name) {
  console.log(letter)
}

let ages = new Map([
  ["Dad", 50],
  ["Mom", 45],
  ["Brother", 20],
  ["Sister", 18],
  ["Me", 25]
])
for (let [person, age] of ages) {
  console.log(person, age)
}

let roles = new Set(["Cook", "Driver", "Cook", "Teacher"])
for (let role of roles) {
  console.log(role)
}

function* chores() {
  yield "Wash dishes"
  yield "Clean room"
  yield "Buy groceries"
}
for (let task of chores()) {
  console.log(task)
}