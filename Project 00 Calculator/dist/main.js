"use strict";
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b == 0) {
            console.log("Can not divide by zero.");
            return 0;
        }
        return a / b;
    }
}
const calculator = new Calculator();
function operations() {
    let num1 = parseFloat(prompt("Enter first number: ") || '0');
    let num2 = parseFloat(prompt("Enter second number: ") || '0');
    console.log("1- Add, 2 - Subtract, 3 - Multiply, 4 - Divide");
    let choice = parseInt(prompt("Select the operation you want to perform: ") || '0');
    let result;
    switch (choice) {
        case 1:
            result = calculator.add(num1, num2);
            break;
        case 2:
            result = calculator.subtract(num1, num2);
            break;
        case 3:
            result = calculator.multiply(num1, num2);
            break;
        case 4:
            result = calculator.divide(num1, num2);
            break;
        default:
            console.log("Invalid Choice. Please try again.");
            return 0;
    }
    console.log(`Result ${result}`);
}
operations();
