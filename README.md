# Calculator Application

<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1726636365/Screenshot_2024-09-18_at_06.12.05_kj8f0q.png" title="Image" alt="image">

## Overview

This is a basic calculator application built using TypeScript, Material UI and React.js. The focus of this project is to demonstrate the handling of TypeScript's static typing and JavaScript's quirks, particularly with calculations and edge cases, as well as the overall structure, maintainability of the code, and approach to testing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes..

## Prerequisites

- Node.js (version 16.20.0)
- npm (version 8.19.4)

## Demo Link

Access the live site at [Project-Link](https://bayzat-calc.netlify.app/)

## Features

### Basic Arithmetic Operations

- Addition, subtraction, multiplication, and division.
- Handles a series of operations (e.g., `3 + 2 * 4 - 5`).

### Handling Edge Cases

- Addresses common JavaScript issues such as floating-point precision (e.g., `0.1 + 0.2` resulting in `0.30000000000000004`).
- Handles division by zero appropriately.
- Manages large numbers and ensures the UI remains user-friendly.

### User Interface

- Clean, user-friendly interface built with React.js.
- Responsive design that works well across different devices (desktop, tablet, mobile).
- Uses Material-UI (MUI) as a component library to streamline UI development.

### Extra Features

- Additional functions like square root and percentage.
- Keyboard support to allow users to perform calculations using their keyboard.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ChuksJoshuaa/bayzat-frontend-task.git
   cd bayzat-frontend-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Usage

### Basic Operations

- Click on the number buttons to input numbers.
- Click on the operation buttons (`+`, `-`, `*`, `/`) to perform arithmetic operations.
- Click the `=` button to evaluate the expression.
- Click the `C` button to clear the input.
- Click the `AC` button to clear all the input.
- Click the `DEL` button to delete the digit.

### Extra Features

- Click the `%` button to calculate the percentage of the current value.
- Click the `√` button to calculate the square root of the current value.

### Keyboard Support

- Use the number keys (`0-9`) to input numbers.
- Use the operation keys (`+`, `-`, `*`, `/`) to perform arithmetic operations.
- Press `Enter` to evaluate the expression.
- Press `Backspace` or `Delete` to delete the digit.
- Press `Escape` to clear the input.
- Press `%` to calculate the percentage of the current value.
- Press `√` to calculate the square root of the current value.

## Code Structure

### `src/utils.tsx`

Contains utility functions and styled components:

- `OutputContainer`: Styled component for the output display.
- `CalculatorBase`: Styled component for the calculator base.
- `roundToPrecision`: Function to handle floating-point precision.
- `Button`: Styled component for the calculator buttons.
- `evaluateExpression`: Function to evaluate arithmetic expressions.

### `src/components/useCalculator.ts`

Contains the custom hook `useCalculator` that manages the calculator's state and logic:

- `equals`: Evaluates the current expression.
- `clear`: Clears the current input.
- `del`: Deletes the last digit.
- `percent`: Calculates the percentage of the current value.
- `squareRoot`: Calculates the square root of the current value.
- `selectOperation`: Selects an arithmetic operation.
- `setDigit`: Sets the current digit.
- `handleKeyDown`: Handles keyboard input.

### `src/interface.ts`

Contains TypeScript interfaces for the components:

- `GridOperationButtonProps`: Interface for operation button props.
- `GridDigitButtonProps`: Interface for digit button props.
- `GridRowProps`: Interface for grid row props.

### `src/components/GridDigitButton.tsx`

Component for digit buttons:

- `GridDigitButton`: A button component for digits.
  - `digit`: The digit to display on the button.
  - `enterDigit`: Function to handle digit input.
  - `xs`: Optional grid size for the button.

### `src/components/GridOperationButton.tsx`

Component for operation buttons:

- `GridOperationButton`: A button component for operations.
  - `selectedOperation`: The currently selected operation.
  - `operation`: The operation to display on the button.
  - `selectOperation`: Function to handle operation selection.

### `src/components/GridRow.tsx`

Component for a row of digit and operation buttons:

- `GridRow`: A row component containing digit and operation buttons.
  - `digits`: Array of digits to display.
  - `operation`: The operation to display.
  - `selectOperation`: Function to handle operation selection.
  - `selectedOperation`: The currently selected operation.
  - `enterDigit`: Function to handle digit input.

### `src/theme.ts`

Theme configuration for Material-UI:

- `theme`: Custom theme configuration for the application.
  - `palette`: Defines the color scheme.
  - `components`: Style overrides for Material-UI components.
  - `typography`: Typography settings for the application.

### `src/App.tsx`

Main application component:

- `App`: The main component that renders the calculator UI.
  - Uses `useCalculator` hook to manage state and logic.
  - Renders `GridDigitButton`, `GridOperationButton`, and `GridRow` components.
  - Displays the current value and handles user interactions.

## Edge Cases

### Floating-Point Precision

- **Issue**: JavaScript has quirks with floating-point arithmetic, which can lead to precision errors (e.g., `0.1 + 0.2` resulting in `0.30000000000000004`).
- **Solution**: Implemented the `roundToPrecision` function to handle floating-point precision issues.

### Division by Zero

- **Issue**: Division by zero can cause errors or unexpected results.
- **Solution**: The `evaluateExpression` function returns `0` when a division by zero is attempted.

### Large Numbers

- **Issue**: Handling very large numbers can be challenging and may lead to performance issues.
- **Solution**: JavaScript's `Number` type is used, which can handle reasonably large values. Additional handling can be implemented if necessary.

## Improvements

If I had more time, I would consider the following improvements:

- **Enhanced Error Handling**: Implement more robust error handling and user feedback for invalid inputs.
- **Memory Functions**: Add memory functions (M+, M-, MR, MC) to store and recall values.
- **History Feature**: Implement a history feature to keep track of past calculations.
- **Advanced Operations**: Add support for more advanced mathematical operations (e.g., trigonometric functions, logarithms).
- **Theming**: Allow users to switch between different themes (light and dark mode).

## Tools and Libraries

### TypeScript

- **Reason**: Provides static typing, which helps catch errors early and improves code maintainability.

### React.js

- **Reason**: A popular library for building user interfaces, allowing for the creation of reusable components.

### Material-UI (MUI)

- **Reason**: A comprehensive component library that provides pre-styled components, making it easier to build a consistent and responsive UI.

### Vite

- **Reason**: A fast build tool that provides a great development experience with hot module replacement and fast builds.

## Cypress Test Cases (End-to-End (E2E) Testing)

### Setting Up Cypress

1. Install Cypress as a dev dependency:

   ```bash
   npm install cypress --save-dev
   ```

2. Open Cypress:

   ```bash
   npx cypress open
   ```

### Test Cases

#### `cypress/e2e/App.cy.ts`
This file contains end-to-end tests for the main calculator application.


#### `cypress/e2e/gridDigitButton.cy.ts`

This file contains tests for the `GridDigitButton` component.


#### `cypress/e2e/GridOperationButton.cy.ts`

This file contains tests for the `GridOperationButton` component.


#### `cypress/e2e/GridRow.cy.ts`

This file contains tests for the `GridRow` component.


## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.
