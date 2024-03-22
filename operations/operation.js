function calculate(operator, num1, num2) {
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
function display(num1, operator, num2) {
    try {
        var result = calculate(operator, num1, num2);
        console.log("The result is: ", result);
    }
    catch (error) {
        console.log("Error: ", error.message);
    }
}
var num1 = 10;
var operator = "+";
var num2 = 10;
display(num1, operator, num2);
