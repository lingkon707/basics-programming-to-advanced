// 23__material_requirements.js
var bom = [
  { product: "Widget", material: "Steel", qtyPerUnit: 2 },
  { product: "Widget", material: "Plastic", qtyPerUnit: 1 },
  { product: "Gadget", material: "Aluminum", qtyPerUnit: 3 },
  { product: "Gadget", material: "Copper", qtyPerUnit: 0.5 }
];

function calculateMaterialNeed(product, orderQty) {
  var materials = {};
  for (var i = 0; i < bom.length; i++) {
    if (bom[i].product === product) {
      materials[bom[i].material] = bom[i].qtyPerUnit * orderQty;
    }
  }
  return materials;
}

console.log("Materials for 100 Widgets:", calculateMaterialNeed("Widget", 100));