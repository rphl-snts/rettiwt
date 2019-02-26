const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
    "mongodb+srv://user:user123@rettiwt-cluster-qkff4.mongodb.net/db_rettiwt",
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Ta funcionando!');
});