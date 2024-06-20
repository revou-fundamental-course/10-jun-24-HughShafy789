function convert(type) {
    if (type === 'toFahrenheit') {
        let celsius = parseFloat(document.getElementById('celsius').value);
        let fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    }
    else if (type === 'toCelsius') {
        let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        let celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    }
}
