// my code base

const account = {
  name: "Reahmi",
  salary: 40000,
  accountAgeYears: 3
};

if (account.accountAgeYears > 1) {
  account.salary *= 2; // double salary
}

console.log(`Updated Salary: ${account.salary}`);