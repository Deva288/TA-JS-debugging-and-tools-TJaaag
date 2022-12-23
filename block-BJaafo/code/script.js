function fullName(firstName, lastName) {
    return (`${firstName} ${lastName}`);
}

let result = fullName("Virat", "Kohli");
let expected = "Virat Koli"
if (result !== expected) {
    throw new Error (`${result} is ot same as ${expected}`);
}

result = fullName("Dev", "Anand");
expected = "Dev Anand"
if (result !== expected) {
    throw new Error (`${result} is ot same as ${expected}`);
}

 
// Calculate total amount


function totalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
}

let output = totalAmount(25,3);
let expected = 80;
if (output !== expected)  {
    throw new Error(`${output} is not same as ${expected}`);
}
output = totalAmount(30, 5);
expected = 180;
if (output !== expected)  {
    throw new Error(`${output} is not same as ${expected}`);
}