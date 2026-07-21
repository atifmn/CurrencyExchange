const exchange = require("./exchLogic.js");

// Locate elements in the DOM (Document Object Model)
const actionButton = document.getElementById('action-btn');
const resultTxt = document.getElementById('result-text');
const convFrom = document.getElementById('ConvFrom');
const convTo = document.getElementById('ConvTo');
const currency = document.getElementById('currency');



// Listen for a click event on the button
actionButton.addEventListener('click', () => {

    try{
        const amount = parseFloat(currency.value);
        const from = convFrom.trim().toUpperCase();
        const to = convTo.trim().toUpperCase();

        const result = exchange.convertCurrency(amount, from, to);

        resultTxt.textContent = amount + " " + from + " = " + result + " " + to;
    } catch (error){
        resultTxt.textContent = `Error: ${error.message}`;
    }
    
});