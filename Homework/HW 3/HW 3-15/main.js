let arr = [
    'hello',
    22,
    true,
    'okten',
    false,
    100,
    'pink',
    true,
    3,
    false
];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'boolean') {
        console.log(arr[i]);
    }
}
