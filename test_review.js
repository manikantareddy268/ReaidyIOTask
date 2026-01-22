// This is a test file to verify the AI Code Review Bot.
// It contains intentional bad practices to see if the bot catches them.

function calculateTotal(price) {
    var tax = 0.10;
    // Todo: fix this hardcoded value
    return price * 1.10;
}

console.log("Total is " + calculateTotal(100));
// New change to trigger PR
