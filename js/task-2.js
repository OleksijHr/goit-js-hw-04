function calcAverageCalories(days) {
    let result = 0;
    for (const day of days) {
        result += day.calories;
    }
    return result / 7;
}
