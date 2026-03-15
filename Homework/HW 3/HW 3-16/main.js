let arr = [
    'hello',
    22,
    true,
    9,
    false,
    100,
    'okten',
    3,
    'pink',
    2025
];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}
