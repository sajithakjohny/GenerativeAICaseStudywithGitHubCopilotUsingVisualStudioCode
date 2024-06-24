// Test addition
console.log(calculator(5, 3, '+') === 8); // Output: true

// Test subtraction
console.log(calculator(10, 2, '-') === 8); // Output: true

// Test multiplication
console.log(calculator(4, 5, '*') === 20); // Output: true

// Test division
console.log(calculator(10, 2, '/') === 5); // Output: true

// Test invalid operator
console.log(calculator(10, 2, '%') === undefined); // Output: trueconst assert = require('assert');

// Test addition
assert.equal(calculator(5, 3, '+'), 8);

// Test subtraction
assert.equal(calculator(10, 2, '-'), 8);

// Test multiplication
assert.equal(calculator(4, 5, '*'), 20);

// Test division
assert.equal(calculator(10, 2, '/'), 5);

// Test invalid operator
assert.equal(calculator(10, 2, '%'), undefined);const assert = require('assert');

// Test addition
assert.equal(calculator(5, 3, '+'), 8);

// Test subtraction
assert.equal(calculator(10, 2, '-'), 8);

// Test multiplication
assert.equal(calculator(4, 5, '*'), 20);

// Test division
assert.equal(calculator(10, 2, '/'), 5);

// Test invalid operator
assert.equal(calculator(10, 2, '%'), undefined);