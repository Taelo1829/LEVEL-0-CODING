const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
console.log(celsiusToFahrenheit(7));
console.log(fahrenheitToCelsius(32));
