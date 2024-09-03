const express = require('express')
const cors= require('cors')
const bodyParser = require('body-parser');

const app = express();

const homeRouter = require('./routes/homeRoutes')

app.use("/",homeRouter)


app.use(cors());
app.use(bodyParser.json());

module.exports = {app};

