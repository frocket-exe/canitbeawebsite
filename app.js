const express = require('express');
const app = express();
const path = require('path');
// const asyncHandler = require('express-async-handler');
const port = 3002;

app.use(express.static('public'));
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});