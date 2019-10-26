require('dotenv').config();

const {home, search, email, topDay} = require("./src/routes");

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();
hbs.registerPartials(`${__dirname}/src/views/partials`);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/src/views`);
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', home);
app.post('/search-results', search);
app.get('/email', email);
app.get('/top', topDay);


app.listen(process.env.PORT, () => {
    console.log('#NYT LISTNEING')
});