"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            console.log("Cannot divide by zero.");
            return 0;
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
function operations() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Enter first number: ", function (num1) {
        rl.question("Enter second number: ", function (num2) {
            var firstNumber = parseFloat(num1);
            var secondNumber = parseFloat(num2);
            console.log("1- Add, 2 - Subtract, 3 - Multiply, 4 - Divide, 5 - Exit");
            rl.question("Select the operation you want to perform: ", function (choice) {
                var result;
                switch (parseInt(choice)) {
                    case 1:
                        result = calculator.add(firstNumber, secondNumber);
                        break;
                    case 2:
                        result = calculator.subtract(firstNumber, secondNumber);
                        break;
                    case 3:
                        result = calculator.multiply(firstNumber, secondNumber);
                        break;
                    case 4:
                        result = calculator.divide(firstNumber, secondNumber);
                        break;
                    case 5:
                        console.log("Exiting calculator...");
                        rl.close();
                        return;
                    default:
                        console.log("Invalid Choice. Please try again.");
                        break;
                }
                console.log("Result: ".concat(result));
                operations(); // Call operations again for continuous calculations
            });
        });
    });
}
operations();
