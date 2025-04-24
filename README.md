# Click Counter App

## Description

This is a simple React application that implements a click counter. It allows you to increment, decrement, and reset a counter.  The app also displays a warning message if the counter goes above 10.

## Features

* **Increment:** Increases the counter by 1.
* **Decrement:** Decreases the counter by 1.
* **Reset:** Resets the counter back to 0.
* **Conditional Warning:** Displays a warning message when the counter is greater than 10.
* **Hover Effects:** The increment, decrement, and reset buttons change appearance on hover, providing visual feedback to the user.

## Technologies Used

* React
* useState for state management
* CSS for styling

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <https://github.com/Rita2024/React-counter-app.git>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd <React-counter-app>
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## How to Run the App

1.  **Start the development server:**
    ```bash
    npm start
    ```
2.  **Open your browser:** The app will be running at `http://localhost:3000` (or a similar address).

## Usage

* **Increment:** Click the "Increment" button to increase the counter.
* **Decrement:** Click the "Decrement" button to decrease the counter.
* **Reset:** Click the "Reset" button to reset the counter to zero.
* **Warning Message:** If the counter's value exceeds 10, a warning message "Count is over 10!" will be displayed.

## Code Highlights

* **`useState` Hook:** The `useState` hook is used to manage the counter's state (`count`) and the hover states for the buttons (`isHoveringIncrement`, `isHoveringDecrement`, `isHoveringReset`).
* **Event Handlers:**
    * `increment()`:  Updates the `count` state by adding 1.
    * `decrement()`: Updates the `count` state by subtracting 1.
    * `resetCount()`:  Resets the `count` state to 0.
* **Conditional Rendering:** The warning message is displayed conditionally using a simple `count > 10` check.
* **Inline Styles with Hover Effects:** The button styles, including hover effects, are managed using inline styles.  The `onMouseEnter` and `onMouseLeave` event handlers are used to update the hover state variables, which then dynamically change the button styles.

## Styles

The application uses inline styles defined in the `styles` object. Key styles include:

* Centered layout with a black background.
* Large font size for the counter display.
* Styled buttons with hover effects (darker background on hover).
* Warning message in red color.
