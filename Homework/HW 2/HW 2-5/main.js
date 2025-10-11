let weekTemperatures = [
    { morning: 12, day: 20, evening: 15 },
    { morning: 13, day: 22, evening: 16 },
    { morning: 11, day: 19, evening: 14 },
    { morning: 10, day: 18, evening: 13 },
    { morning: 14, day: 23, evening: 17 },
    { morning: 15, day: 24, evening: 18 },
    { morning: 12, day: 21, evening: 16 }
];

console.log("Температура вранці у понеділок:", weekTemperatures[0].morning);
console.log("Температура вдень у середу:", weekTemperatures[2].day);
console.log("Температура ввечері у неділю:", weekTemperatures[6].evening);

for (let i = 0; i < weekTemperatures.length; i++) {
    console.log(
        `День ${i + 1}: ранок ${weekTemperatures[i].morning}°C, ` +
        `день ${weekTemperatures[i].day}°C, ` +
        `вечір ${weekTemperatures[i].evening}°C`
    );
}
