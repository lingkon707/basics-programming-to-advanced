// 09__quality_control.js
var qcRecords = [
  { batch: "B001", defects: 3, sampleSize: 100 },
  { batch: "B002", defects: 8, sampleSize: 100 },
  { batch: "B003", defects: 2, sampleSize: 100 }
];

function getDefectRate(batch) {
  for (var i = 0; i < qcRecords.length; i++) {
    if (qcRecords[i].batch === batch) {
      return (qcRecords[i].defects / qcRecords[i].sampleSize * 100) + "%";
    }
  }
  return "Batch not found";
}

console.log("Defect rate for B002:", getDefectRate("B002"));