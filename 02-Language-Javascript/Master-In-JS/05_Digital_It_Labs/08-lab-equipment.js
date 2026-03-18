var equipmentCount = 25;

function useComputer() {
    if (equipmentCount > 0) {
        equipmentCount--;
        console.log("Computer allocated.");
    }
}

useComputer();