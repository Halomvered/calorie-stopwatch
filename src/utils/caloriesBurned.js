// Calculate Resting Metabolic Rate and convert it to o2/KG/MIN
function personalMET(sex, age, height, weight) {
  let RMR;
  if (sex.toLowerCase() === 'male') {
    RMR = 66.4730 + 5.0033 * height + 13.7516 * weight - 6.7550 * age;
  }
  if (sex.toLowerCase() === 'female') {
    RMR = 655.0955 + 1.8496 * height + 9.5634 * weight - 4.6756 * age;
  }
  const pMET = ((RMR / 1440) / 5) / weight * 1000;
  
  return Number(pMET);
}


// Calculate corrected Metabolic Equivalent 
function correctedMET(personalMET, activityMET) {
  return (3.5 / personalMET) * activityMET;
}

export default function caloriesBurned(correctedMET, weight, milliS) {
  const caloriePerSec = (correctedMET * weight) / 3600;
  const calorieBurned = (caloriePerSec / 1000) * milliS; 

  return Number(calorieBurned.toFixed(1));
}

export { personalMET, correctedMET};