//function to convert C to F
function convertCtoF(celsius) {
  //convert C to F using formula (C * 9/5) + 32
  let fahrenheit =(celsius * (9/5)) + 32;
  return fahrenheit;
}

//test function
let celsiusValues = [100, 45, 19, 0, -7, -40];
console.log("Celsius to Fahrenheit Conversion:");
celsiusValues.forEach((value) => {
  let fahrenheit = convertCtoF(value);
  console.log(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
});