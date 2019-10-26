require('dotenv').config();

const {home, search, email} = require("./routes");

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();
hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', home);
app.post('/search-results', search);
app.get('/email', email);

app.listen(3000, () => {
    console.log('#NYT LISTNEING')
});