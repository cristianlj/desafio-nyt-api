require('dotenv').config();

const { home, search, email, topDay } = require("./src/routes");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', home);
app.post('/search-results', search);
app.get('/email', email);
app.get('/top', topDay);


app.listen(process.env.PORT, () => {
    console.log('#NYT LISTNEING')
});