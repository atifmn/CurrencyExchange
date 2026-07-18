require("dotenv").config();

async function convertCurrency(amount, fromCurrency, toCurrency) {
    const API_KEY = process.env.API_KEY;

    const url =
        `https://v6.exchangerate-api.com/v6/${API_KEY}` +
        `/pair/${fromCurrency}/${toCurrency}/${amount}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || data.result !== "success") {
        throw new Error(data["error-type"] || "Conversion failed");
    }

    return data.conversion_result;
}

module.exports = { convertCurrency };