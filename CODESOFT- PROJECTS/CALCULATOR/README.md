## CODSOFT WEB DEVELOPMENT ##

{TASK-3}-Dark Themed Calculator.

This task is a dark-themed calculator built using HTML, CSS, and JavaScript. It includes basic arithmetic operations as well as additional functionalities like squaring and square rooting numbers.


### HTML ###

(1)Calculator Container: A div that holds the entire calculator layout.

(2)Title: An h1 element with the text "CALCULATOR," styled to stand out.

(3)Display: An input element of type text that shows the current input and results. It's set to disabled to prevent direct editing.

(4)Buttons: A series of button elements for digits (0-9), operations (addition, subtraction, multiplication, division), and additional functions (square, square root, clear, and equals).

### CSS ##

(1)Body Styles: Sets a dark background color and centers the calculator.

(2)Calculator Container: Styles the background, padding, border-radius, and box-shadow to create a card-like effect.

(3)Title: Styles the title with a glowing effect and letter spacing to enhance visibility.

(4)Display Styles: Styles the input field to be wide, centered, and visually appealing with padding and box-shadow.

(5)Buttons: 
  - Uses a grid layout for button arrangement.

  - Each button has hover effects, transitions, and active states for user interaction.

  - Specific styles for different button types, including colors for operation buttons and the equals button.

### JavaScript ###

(1)Display Handling: A function appendToDisplay(value) to append numbers and operators to the display.

(2)Clear Function: clearDisplay() resets the display.

(3)Calculation Logic: calculateResult() evaluates the expression in the display using eval() and handles errors gracefully.

(4)Advanced Operations: 

  - calculateSquare() calculates the square of the current number in the display.

  - calculateSquareRoot() computes the square root of the current number in the display.

