var mining = {
    electricity: 1200,
    hardware: 3500,
    maintenance: 800
};

var totalCost = mining.electricity + mining.hardware + mining.maintenance;
console.log("Monthly Mining Cost:", totalCost);