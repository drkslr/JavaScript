let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<h2>Користувачі зі статусом TRUE</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        document.write('<div>' + users[i].name + ' — ' + users[i].status + '</div>');
    }
}

document.write('<h2>Користувачі зі статусом FALSE</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].status === false) {
        document.write('<div>' + users[i].name + ' — ' + users[i].status + '</div>');
    }
}

document.write('<h2>Користувачі старші за 30</h2>');
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        document.write('<div>' + users[i].name + ' — ' + users[i].age + '</div>');
    }
}
