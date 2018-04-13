import caloriesBurned from './caloriesBurned';

export default function totalCalories(activitiesArr, userWeight) {
    return activitiesArr
    .reduce((acc, curr) => acc + caloriesBurned(curr.MET, userWeight, curr.time), 0)
    .toFixed(1);
}