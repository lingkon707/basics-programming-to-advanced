

function atmStatus(cash) {
  console.log("ATM:", cash < 20000 ? "Low Cash" : "Operational");
}
atmStatus(15000);