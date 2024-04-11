import * as readline from 'readline';

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            console.log("Cannot divide by zero.");
            return 0;
        }
        return a / b;
    }
}

const calculator = new Calculator();

function operations() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            const firstNumber = parseFloat(num1);
            const secondNumber = parseFloat(num2);
            console.log("1- Add, 2 - Subtract, 3 - Multiply, 4 - Divide, 5 - Exit");
            rl.question("Select the operation you want to perform: ", (choice) => {
                let result: number;
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
                console.log(`Result: ${result}`);
                operations(); // Call operations again for continuous calculations
            });
        });
    });
}

operations();
