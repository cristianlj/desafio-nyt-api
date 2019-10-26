require('dotenv').config();

const {home} = require("./routes");

const express = require('express');
const hbs = require('hbs');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', home);

app.listen(3000, () => {
    console.log("#NYT LISTNEING")
})