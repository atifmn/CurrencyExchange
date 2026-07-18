const exchange = require("./exchLogic.js");
const prompt = require('prompt-sync')();

async function testConversion() {
    try {
        let convFrom = await prompt("Convert from: ")

        let currencyAmount = await prompt("Enter currency Amount: ")

        let convTo = await prompt("Convert to: ")

        const result = await exchange.convertCurrency(parseInt(currencyAmount), convFrom, convTo);

        console.log(`${currencyAmount} ${convFrom} = ${result} ${convTo}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

testConversion();