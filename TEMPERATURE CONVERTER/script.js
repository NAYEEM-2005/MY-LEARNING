// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', function() {

    // Get the input value and the selected temperature scale
    const input = document.getElementById('tempInput').value;
    const scale = document.querySelector('input[name="scale"]:checked').value;
    const result = document.getElementById('result');

    // Validate input: Check if it's empty or not a number
    if (input === "" || isNaN(input)) {
        result.innerText = "Please enter a valid number!";
        return; // Exit the function if input is invalid
    }

    // Parse the input as a floating-point number
    const temp = parseFloat(input);
    let celsius, fahrenheit, kelvin, rankine;

    // Conversion logic based on the selected scale
    if (scale === 'C') {

        // Convert from Celsius
        celsius = temp;
        fahrenheit = (celsius * 9 / 5) + 32; // Celsius to Fahrenheit
        kelvin = celsius + 273.15; // Celsius to Kelvin
        rankine = (celsius + 273.15) * 9 / 5; // Celsius to Rankine

        // Display results
        result.innerText = fahrenheit.toFixed(2) + " °F | " + kelvin.toFixed(2) + " K | " + rankine.toFixed(2) + " °R";
    } else if (scale === 'F') {

        // Convert from Fahrenheit
        fahrenheit = temp;
        celsius = (fahrenheit - 32) * 5 / 9; // Fahrenheit to Celsius
        kelvin = celsius + 273.15; // Celsius to Kelvin
        rankine = fahrenheit + 459.67; // Fahrenheit to Rankine

        // Display results
        result.innerText = celsius.toFixed(2) + " °C | " + kelvin.toFixed(2) + " K | " + rankine.toFixed(2) + " °R";
    } else if (scale === 'K') {

        // Convert from Kelvin
        kelvin = temp;
        celsius = kelvin - 273.15; // Kelvin to Celsius
        fahrenheit = (celsius * 9 / 5) + 32; // Celsius to Fahrenheit
        rankine = kelvin * 9 / 5; // Kelvin to Rankine

        // Display results
        result.innerText = celsius.toFixed(2) + " °C | " + fahrenheit.toFixed(2) + " °F | " + rankine.toFixed(2) + " °R";
    } else if (scale === 'R') {

        // Convert from Rankine
        rankine = temp;
        celsius = (rankine - 491.67) * 5 / 9; // Rankine to Celsius
        fahrenheit = rankine - 459.67; // Rankine to Fahrenheit
        kelvin = rankine * 5 / 9; // Rankine to Kelvin
        
        // Display results
        result.innerText = celsius.toFixed(2) + " °C | " + fahrenheit.toFixed(2) + " °F | " + kelvin.toFixed(2) + " K";
    }
});