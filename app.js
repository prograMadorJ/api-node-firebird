const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./src/routes'));


module.exports = app;