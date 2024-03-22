type Operators = "+" | "-" | "/" | "*";

function calculate (operator: Operators, num1: number, num2: number): number {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator");
    }
}

function display(num1: number, operator: Operators, num2: number)
{
    try {
        const result = calculate(operator, num1, num2);
        console.log("The result is: ", result);
    } catch (error)
    {
        console.log("Error: ", error.message);
    }
}

const num1 = 10;
const operator= "+";
const num2= 10;

display(num1, operator, num2);