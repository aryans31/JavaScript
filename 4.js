//conversions


// Convert "123" to a number using different methods

// Method 1: Number() constructor
const num1 = Number("123");
console.log("Number():", num1, typeof num1);

// Method 2: parseInt()
const num2 = parseInt("123");
console.log("parseInt():", num2, typeof num2);

// Method 3: Unary + operator
const num3 = +"123";
console.log("Unary +:", num3, typeof num3);
// Convert values to booleans using Boolean() constructor
const bool1 = Boolean(true);
console.log("Boolean(true):", bool1, typeof bool1);

const bool2 = Boolean(false);
console.log("Boolean(false):", bool2, typeof bool2);

const bool3 = Boolean(0);
console.log("Boolean(0):", bool3, typeof bool3);

const bool4 = Boolean(1);
console.log("Boolean(1):", bool4, typeof bool4);

const bool5 = Boolean("");
console.log("Boolean(\"\"):", bool5, typeof bool5);
// Convert 123 to a string using different methods

// Method 1: String() constructor
const str1 = String(123);
console.log("String():", str1, typeof str1);

// Method 2: toString() method
const str2 = (123).toString();
console.log("toString():", str2, typeof str2);

// Check if values are truthy or falsy
function checkTruthiness(value) {
    return value ? "truthy" : "falsy";
}

console.log("\nTruthiness checks:");
console.log("checkTruthiness(true):", checkTruthiness(true));
console.log("checkTruthiness(false):", checkTruthiness(false));
console.log("checkTruthiness(1):", checkTruthiness(1));
console.log("checkTruthiness(0):", checkTruthiness(0));
console.log("checkTruthiness('hello'):", checkTruthiness("hello"));
console.log("checkTruthiness(''):", checkTruthiness(""));
console.log("checkTruthiness(null):", checkTruthiness(null));
console.log("checkTruthiness(undefined):", checkTruthiness(undefined));
console.log("checkTruthiness(NaN):", checkTruthiness(NaN));
console.log("checkTruthiness([]):", checkTruthiness([]));
console.log("checkTruthiness({}):", checkTruthiness({}));
// String and number concatenation
const stringNum = "5" + 3;
console.log("\nString + Number concatenation:");
console.log("'5' + 3 =", stringNum, typeof stringNum);
console.log("Result: JavaScript converts the number to a string and concatenates them");

const numString = 5 + "3";
console.log("5 + '3' =", numString, typeof numString);
console.log("Result: Same behavior - number becomes string, then concatenation occurs");

// For mathematical operations, use explicit conversion
const actualSum = Number("5") + 3;
console.log("Number('5') + 3 =", actualSum, typeof actualSum);
console.log("Result: Explicit conversion allows proper mathematical addition");

// Convert "42px" to a number by removing non-numeric characters
const pixelValue = "42px";

// Method 1: parseInt() - stops at first non-numeric character
const num1 = parseInt(pixelValue);
console.log("\nConverting '42px' to number:");
console.log("parseInt('42px'):", num1, typeof num1);

// Method 2: parseFloat() - for decimal values
const num2 = parseFloat(pixelValue);
console.log("parseFloat('42px'):", num2, typeof num2);

// Method 3: Using replace() to remove non-digits
const num3 = Number(pixelValue.replace(/[^0-9.-]/g, ''));
console.log("Number(replace()):", num3, typeof num3);

// Method 4: Using slice() if you know the format
const num4 = Number(pixelValue.slice(0, -2));
console.log("Number(slice()):", num4, typeof num4);

// Convert null and undefined to numbers
console.log("\nConverting null and undefined to numbers:");

// null conversion
const nullToNum = Number(null);
console.log("Number(null):", nullToNum, typeof nullToNum);

// undefined conversion
const undefinedToNum = Number(undefined);
console.log("Number(undefined):", undefinedToNum, typeof undefinedToNum);

// Using unary + operator
const nullUnary = +null;
const undefinedUnary = +undefined;
console.log("+ null:", nullUnary, typeof nullUnary);
console.log("+ undefined:", undefinedUnary, typeof undefinedUnary);

// Using parseInt
const nullParseInt = parseInt(null);
const undefinedParseInt = parseInt(undefined);
console.log("parseInt(null):", nullParseInt, typeof nullParseInt);
console.log("parseInt(undefined):", undefinedParseInt, typeof undefinedParseInt);
// Convert array of strings to array of numbers
const stringArray = ["1", "2", "3"];

// Method 1: Using map() with Number()
const numberArray1 = stringArray.map(Number);
console.log("\nConverting ['1', '2', '3'] to numbers:");
console.log("map(Number):", numberArray1);

// Method 2: Using map() with parseInt()
const numberArray2 = stringArray.map(str => parseInt(str));
console.log("map(parseInt):", numberArray2);

// Method 3: Using map() with unary + operator
const numberArray3 = stringArray.map(str => +str);
console.log("map(+):", numberArray3);

// Convert object to string using different methods
const obj = {a: 1};

// Method 1: JSON.stringify() - most common for objects
const objStr1 = JSON.stringify(obj);
console.log("\nConverting {a: 1} to string:");
console.log("JSON.stringify():", objStr1, typeof objStr1);

// Method 2: String() constructor
const objStr2 = String(obj);
console.log("String():", objStr2, typeof objStr2);

// Method 3: toString() method
const objStr3 = obj.toString();
console.log("toString():", objStr3, typeof objStr3);