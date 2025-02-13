//function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) { 
    return (celsius * 9/5) + 32;
}

//Driver code
let celsius = 100;
console.log(celsius + "°C is " + celsiusToFahrenheit(celsius) + "°F");

//function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

//Driver code
let fahrenheit = 212;
console.log(fahrenheit + "°F is " + fahrenheitToCelsius(fahrenheit) + "°C");
