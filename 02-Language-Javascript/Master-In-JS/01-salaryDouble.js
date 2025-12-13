// my code base

const account = {
  name: "John Doe",
  salary: 30000,
  accountAgeYears: 2
};

if (account.accountAgeYears > 1) {
  account.salary *= 2; // double salary
}

console.log(`Updated Salary: ${account.salary}`);