function getMinNumber(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(getMinNumber([13, -4, 27, 0, 99, -12])); // очікуємо -12
