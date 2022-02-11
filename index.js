const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/router/router');
const app = express();
const port = process.env.port || 8080;

const bodyParser = require('express');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');
const db = mongoose.connection;

app.use(router);

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})