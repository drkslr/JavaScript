function buildList(arr) {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

buildList([42, 'сьогодні я в строю', true, 'JS терпить мене, а я його']);
