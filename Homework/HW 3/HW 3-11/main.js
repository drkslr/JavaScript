let arr = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
console.log("1. WHILE — всі елементи:");
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("2. FOR — всі елементи:");
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

console.log("3. WHILE — непарні індекси:");
let k = 0;
while (k < arr.length) {
    if (k % 2 !== 0) {
        console.log(arr[k]);
    }
    k++;
}

console.log("4. FOR — непарні індекси:");
for (let m = 0; m < arr.length; m++) {
    if (m % 2 !== 0) {
        console.log(arr[m]);
    }
}

console.log("5. WHILE — парні значення:");
let n = 0;
while (n < arr.length) {
    if (arr[n] % 2 === 0) {
        console.log(arr[n]);
    }
    n++;
}

console.log("6. FOR — парні значення:");
for (let p = 0; p < arr.length; p++) {
    if (arr[p] % 2 === 0) {
        console.log(arr[p]);
    }
}

console.log("7. Замінити кратні 3 на 'okten':");
for (let r = 0; r < arr.length; r++) {
    if (arr[r] % 3 === 0) {
        arr[r] = "okten";
    }
}
console.log(arr);

console.log("8. Зворотний порядок:");
for (let s = arr.length - 1; s >= 0; s--) {
    console.log(arr[s]);
}

console.log("9.1 WHILE назад:");
let i2 = arr.length - 1;
while (i2 >= 0) {
    console.log(arr[i2]);
    i2--;
}

console.log("9.2 FOR назад:");
for (let j2 = arr.length - 1; j2 >= 0; j2--) {
    console.log(arr[j2]);
}

console.log("9.3 WHILE — непарні індекси назад:");
let k2 = arr.length - 1;
while (k2 >= 0) {
    if (k2 % 2 !== 0) {
        console.log(arr[k2]);
    }
    k2--;
}

console.log("9.4 FOR — непарні індекси назад:");
for (let m2 = arr.length - 1; m2 >= 0; m2--) {
    if (m2 % 2 !== 0) {
        console.log(arr[m2]);
    }
}

console.log("9.5 WHILE — парні значення назад:");
let n2 = arr.length - 1;
while (n2 >= 0) {
    if (typeof arr[n2] === "number" && arr[n2] % 2 === 0) {
        console.log(arr[n2]);
    }
    n2--;
}

console.log("9.6 FOR — парні значення назад:");
for (let p2 = arr.length - 1; p2 >= 0; p2--) {
    if (typeof arr[p2] === "number" && arr[p2] % 2 === 0) {
        console.log(arr[p2]);
    }
}

console.log("9.7 Замінити кратні 3 назад:");
for (let r2 = arr.length - 1; r2 >= 0; r2--) {
    if (typeof arr[r2] === "number" && arr[r2] % 3 === 0) {
        arr[r2] = "okten";
    }
}
console.log(arr);
