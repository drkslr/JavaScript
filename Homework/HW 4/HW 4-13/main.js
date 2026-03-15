function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        const item = currencyValues[i];

        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }

    return 'Помилка: валюту не знайдено';
}

console.log(
    exchange(
        10000,
        [
            {currency: 'USD', value: 25},
            {currency: 'EUR', value: 42}
        ],
        'USD'
    )
);
