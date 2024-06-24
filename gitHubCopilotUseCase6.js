function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operator');
            break;
    }

    return result;
}
//create unit tests for the calculator function
// Test addition
console.log(calculator(5, 3, '+') === 8); // Output: true
// Test subtraction
console.log(calculator(10, 2, '-') === 8); // Output: true
// Test multiplication  
console.log(calculator(4, 5, '*') === 20); // Output: true
// Test division
console.log(calculator(10, 2, '/') === 5); // Output: true
// Test invalid operator
console.log(calculator(10, 2, '%') === undefined); // Output: true




