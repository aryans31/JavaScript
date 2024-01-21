//2. Implement a calculator program that can perform addition, subtraction, multiplication, and division.

const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

const rem = (a, b) => {
    return a % b;
}

const main = () => {
    let a, b;

    a = prompt("Enter the value of a");
    a = parseFloat(a);
    b = prompt("Enter the value of b");
    b = parseFloat(b);

    console.log("Your given values are " + a + " and " + b);

    console.log("Choose between the following: 1. Sum   2. Sub  3. Mul  4. Div  5. Rem");

    do {
        let choice = prompt("Enter your choice");
        switch (choice) {
            case '1':
                console.log("Sum: " + sum(a, b));
                break;
            case '2':
                console.log("Subtraction: " + sub(a, b));
                break;
            case '3':
                console.log("Multiplication: " + mul(a, b));
                break;
            case '4':
                console.log("Division: " + div(a, b));
                break;
            case '5':
                console.log("Remainder: " + rem(a, b));
                break;
            default:
                console.log("Invalid choice");
        }

        let ch = prompt("Do you wish to continue? Enter 'yes' to continue.");
    } while (ch.toLowerCase() === 'yes');

    console.log("Goodbye :)");
}
main();
