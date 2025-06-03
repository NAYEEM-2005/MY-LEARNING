TEMPERATURE CONVERTER

This is a simple temperature converter web application that allows users to convert temperatures between Celsius, Fahrenheit, Kelvin, and Rankine..

## HTML ##

 (1) head: Contains metadata, the character set, viewport settings, and links to the CSS file.

 (2) body: Contains a single "div" with the class converter, which houses all the converter functionality.

 (3) h1: The main title "Temperature Converter".

 (4) input: A number input for the user to enter a temperature.

 (5) .scale-selector: A group of radio buttons allowing the user to select the temperature scale (Celsius, Fahrenheit, Kelvin, Rankine).

 (6) button: A button that triggers the conversion when clicked.

 (7) div: An empty div where the results of the conversion will be displayed.

## CSS ##

(1)Body: 

  - A gradient background that shifts between colors to create a vibrant atmosphere.

  - Flexbox is used to center the converter on the screen.

(2)Converter:

  - A white background with a slight transparency, rounded corners, and a box shadow for depth.

  - A dark border with glowing edge lighting effects to enhance visibility.

(3)Headings and Labels:

  - The heading is styled with a bold, uppercase font for emphasis.

  - Input fields have a defined border color that changes on focus for better usability.

(4)Buttons:

  - A colored button that changes background color and adds a glow effect on hover.

## JavaScript ##

(1)Event Listener:

  - An event listener is added to the "Convert" button to trigger the conversion process when clicked.

(2)Input Validation:

  - Checks if the input field is empty or contains non-numeric values, displaying an error message if invalid.

(3)Conversion Logic:

  - Based on the selected scale, the script converts the input temperature to the other three scales using appropriate formulas:

    (a)Celsius:

      - To Fahrenheit: (C * 9 / 5) + 32

      - To Kelvin: C + 273.15

      - To Rankine: (C + 273.15) * 9 / 5

    (b)Fahrenheit:

      - To Celsius: (F - 32) * 5 / 9

      - To Kelvin: C + 273.15

      - To Rankine: F + 459.67

    (c)Kelvin:

      - To Celsius: K - 273.15

      - To Fahrenheit: (C * 9 / 5) + 32

      - To Rankine: K * 9 / 5

    (d)Rankine:

      - To Celsius: (R - 491.67) * 5 / 9

      - To Fahrenheit: R - 459.67

      - To Kelvin: R * 5 / 9

 Display Results: 

  - The results are displayed in a formatted string, showing the temperature in all four scales.

This temperature converter is a simple yet effective application that demonstrates the use of HTML, CSS, and JavaScript to create interactive web experiences. It can be easily expanded with additional features or styles as desired.


## How It Works ##

(1)User Input:

   - The user enters a temperature value in the input field provided. The application accepts numeric values only.

(2)Scale Selection:

   - The user selects the temperature scale they wish to convert from (Celsius, Fahrenheit, Kelvin, or Rankine) using radio buttons.

(3)Conversion Process:

 - When the user clicks the "Convert" button, an event listener triggers the conversion function:

     - The application first validates the input to ensure it is a number and not empty. If invalid, it displays an error message.

     - It retrieves the selected scale and the input temperature.

     - Depending on the selected scale, the script calculates the equivalent temperatures in the other three scales using predefined formulas.

(4)Displaying Results:

   - Once the calculations are complete, the results are formatted into a readable string and displayed in the result area below the button. This string shows the converted temperatures in all four scales (e.g., "32.00 °F | 273.15 K | 491.67 °R").

(5)Visual Feedback:

   - The application provides visual feedback through styling changes (e.g., border color change when the input field is focused) and glowing effects on the button when hovered over.

This interactive flow allows users to quickly and easily convert temperatures between different scales, enhancing usability and functionality.