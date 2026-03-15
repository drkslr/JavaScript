function printUsers(users) {
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        document.write(`
            <div style="margin-bottom: 10px; padding: 8px; border: 1px solid #ccc;">
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Age:</strong> ${user.age}</p>
            </div>
        `);
    }
}

printUsers([
    {id: 1, name: 'Джесс майстриня хаосу', age: 24},
    {id: 2, name: 'Арсеній, хранитель спокою', age: 25},
    {id: 3, name: 'Кіт з сусіднього виміру', age: 7}
]);
