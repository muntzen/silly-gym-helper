
function calculatePlates() {
  var result = document.getElementById("plates");
  var weight = document.getElementById("weight").value;
  if (weight % 5 !== 0) {
    result.innerHTML = "Must be even increment of 5";
    return;
  }

  var plates = [45, 25, 10, 5, 2.5];
  var availPlateWeights = [plates.length];
  var platesToUse = [plates.length];
  for (var i = 0; i < plates.length; i++) {
    availPlateWeights[i] = plates[i] * 2;
    platesToUse[i] = 0;
  }

  var activeWeight = 45;

  if (activeWeight == weight) {
    result.innerHTML = "Use the bar";
  } else if (weight < activeWeight) {
    result.innerHTML = "Weight(" + weight + ") is less than the bar, sorry";
  } else {
    
    var plateIndex = 0;
    while (activeWeight < weight && plateIndex < availPlateWeights.length) {
      if (activeWeight + availPlateWeights[plateIndex] <= weight) {
        platesToUse[plateIndex] = platesToUse[plateIndex] + 1;
        activeWeight = activeWeight + availPlateWeights[plateIndex];
      } else {
        plateIndex++;
      }
    }
    var plateStr = "";
    for (var i = 0; i < platesToUse.length; i++) {
      if (platesToUse[i] > 0) {
        plateStr += "<li>" + plates[i] + "lbs x " + platesToUse[i] + "</li>";
      }
    }
    result.innerHTML = plateStr;
  }
  
}
