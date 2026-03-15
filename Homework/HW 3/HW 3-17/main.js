let arr = [
    'hello',
    22,
    true,
    'okten',
    false,
    100,
    'pink',
    3,
    'javascript',
    'rose'
];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(arr[i]);
    }
}
