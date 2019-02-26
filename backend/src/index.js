const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://rettiwt:rettiwt123@cluster0-gckzy.mongodb.net/admin",
    {
        useNewUrlParser: true
    }
);

app.get('/', (req, res) => {
    return res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Ta funcionando!');
});