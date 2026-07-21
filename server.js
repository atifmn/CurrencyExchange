require("dotenv").config();

const express = require("express");
const exchange = require("./exchLogic.js");

const app = express();

app.use(express.static("."));

app.get("/convert", async (req, res) => {
    try {
        const result = await exchange.convertCurrency(
            parseFloat(req.query.amount),
            req.query.from,
            req.query.to
        );

        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Open http://localhost:3000");
});