// List of 25 most popular currencies
const currencies = [
    "USD",
    "EUR",
    "JPY",
    "GBP",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "SEK",
    "MXN",
    "NZD",
    "SGD",
    "HKD",
    "NOK",
    "KRW",
    "TRY",
    "INR",
    "RUB",
    "BRL",
    "ZAR",
    "DKK",
    "PLN",
    "TWD",
    "THB",
    "MYR"
];

// Locate elements in the DOM (Document Object Model)
const actionButton = document.getElementById('action-btn');
const resultTxt = document.getElementById('result-text');
const convFrom = document.getElementById('ConvFrom');
const convTo = document.getElementById('ConvTo');
const currency = document.getElementById('currency');


function addCurrencyOptions(currElement){

    currencies.forEach((currentCurrencyCode) => {

        const option = document.createElement("option");
        option.value = currentCurrencyCode;
        option.textContent = currentCurrencyCode;
        currElement.appendChild(option)

    });
}

addCurrencyOptions(convFrom);
addCurrencyOptions(convTo);

// Listen for a click event on the button
actionButton.addEventListener('click', async () => {
    try {
        const amount = parseFloat(currency.value);
        const from = convFrom.value.trim().toUpperCase();
        const to = convTo.value.trim().toUpperCase();

        const response = await fetch(
            `/convert?amount=${amount}&from=${from}&to=${to}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Conversion failed");
        }

        resultTxt.textContent = "" + amount + " " + from + " = " +  data.result + " " + to;
    } catch (error) {
        resultTxt.textContent = `Error: ${error.message}`;
    }
});
