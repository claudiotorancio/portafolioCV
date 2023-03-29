//app.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }))
app.use(require('./api/enrutador.js'))
//app.use(require('./api/success.js'))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

