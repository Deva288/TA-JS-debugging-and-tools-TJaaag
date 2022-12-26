// Testing framework

function test(message, callback) {
   try {
    callback();
    console.log('✅', message)
   }
   catch (error) {
    console.error(error)
    console.log('❎', message);
   }
};


//Assertio Liberary

function expect (actual) {
    return {
        toEqual: function (expected) {
            if (actual !== expected) {
                throw new Error (`${actual} is not eual to ${expected}`);
            }
        },
        toBeEqual: function (expected) {
            if(typeof actual !== expected) {
                throw new Error (`${typeof actual} is not equal to ${expected}`);
            }
        }
    }
}


// add function  


function add (numA = 0, numB = 0) {
    return numA + numB;
};

// testing for function 

test("Add 5 + 9 to be equal to 14", () => expect (add(5, 9)).toEqual(15));
test("Add 10 + 20 to be equal to 30", () => expect (add(10, 20)).toEqual(30));
test("Add 50 + 9 to be equal to 59", () => expect (add(50, 9)).toEqual(59));
test("Add 15 + 100 to be equal to 115", () => expect (add(15, 100)).toEqual(115));
test("Add 99 + 9 to be equal to 108", () => expect (add(99, 9)).toEqual(108));


test("The type of value to be number", () => expect(add(10, 0)).toBeEqual("number"));


// multiply function

function multiply(numA = 0, numB = 0) {
    return numA * numB;
  };
  
  
  // Tests for add function
  
  test("multiply 5 + 9 to be equal to 45", () => expect(multiply(5, 9)).toEqual(46));
  test("multiply 14 * 20 to be equal to 280", () => expect(multiply(14, 20)).toEqual(280));
  test("multiply 3 * 18 to be equal to 54", () => expect(multiply(3, 18)).toEqual(54));
  test("multiply 7 * 8 to be equal to 56", () => expect(multiply(7, 8)).toEqual(56));
  test("multiply 10 * 7 to be equal to 70", () => expect(multiply(10, 7)).toEqual(70));
  
  test("The type of value to be number", () => expect(multiply(10, 0)).toBeEqual("number"));
  
  