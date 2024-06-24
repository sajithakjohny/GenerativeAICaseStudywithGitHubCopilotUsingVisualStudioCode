const phoneNumberRegex = /\(\d{3}\) \d{3}-\d{4}/;
// test phoneNumberRegex against the phone number with console.log
console.log(phoneNumberRegex.test('(555) 555-5555')); // true
console.log(phoneNumberRegex.test('555-555-5555')); // false
console.log(phoneNumberRegex.test('(555) 555-555')); // false
console.log(phoneNumberRegex.test('(555) 555-55555')); // false
console.log(phoneNumberRegex.test('(555) 555-555')); // false


     









