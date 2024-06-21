Confetti Calculator

Welcome to Confetti Calculator, a fun and interactive calculator application built with React. This calculator mimics the functionality and appearance of a standard calculator, with an added surprise of confetti animation upon certain calculations!

Features

Arithmetic operations: addition, subtraction, multiplication, division
Memory functions: MC, M+, M-, MR
Scientific functions: square (x²), cube (x³), square root (√), and more
Constants: π (pi)
Special functions: Rand (random number), EE (exponent), Rad (radians)
Error handling and input validation
Dynamic button styling based on button type and operation
Getting Started

To run this project on your local machine, follow these steps:

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (version >= 12.0.0)
npm (version >= 6.0.0) or yarn (version >= 1.0.0)
Installation
Clone the repository

bash
Copy code
git clone https://github.com/AyushmanSinghRajawat/Confetti-Calculator.git
cd confetti-calculator
Install dependencies

Using npm:

bash
Copy code
npm install
Or using yarn:

bash
Copy code
yarn install
Running the Application
Start the application

bash
Copy code
npm start
Or with yarn:

bash
Copy code
yarn start
View the application

Open your web browser and go to http://localhost:5173 to see the Confetti Calculator app running.

Usage

Enter numbers and perform calculations using the keypad.
Press "AC" to clear the current calculation.
Use the "=" button to evaluate the entered expression.
Experience confetti animation when specific numbers or operations trigger it!
Technologies Used

React
CSS (for styling)
JavaScript (ES6+)
Folder Structure

php
Copy code
confetti-calculator/
│
├── public/         # Public assets and HTML template
├── src/            # React components and application logic
│   ├── components/ # React components (Calculator, Button, Display, Confetti)
│   ├── utils/      # Utility functions (calculate)
│   ├── styles/     # CSS stylesheets
│   └── App.js      # Main application component
│
├── .gitignore      # Files and directories ignored by Git
├── package.json    # Project metadata and dependencies
└── README.md  