#! /usr/bin/env node 

import inquirer from "inquirer";

const input = await inquirer.prompt([
  { message: "Enter first number: ", type: "number", name: "first" },
  { message: "Enter second number: ", type: "number", name: "second" },
  {
    message: "Select any operation of choice: ",
    type: "list",
    name: "choice",
    choices: ["Add", "Subtract", "Multiply", "Divide"],
  },
]);

if (input.choice === "Add") {
  let result = input.first + input.second;

  console.log(`Result of Addition: ${result}`);
}

if (input.choice === "Subtract") {
  let result = input.first - input.second;

  console.log(`Result of Subtraction: ${result}`);
}

if (input.choice === "Multiply") {
  let result = input.first * input.second;

  console.log(`Result of Multiplication: ${result}`);
}

if (input.choice === "Divide") {
  let result = input.first / input.second;

  console.log(`Result of Division: ${result}`);
}
