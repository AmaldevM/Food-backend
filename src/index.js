const express = require('express')
const cors= require('cors')
const bodyParser = require('body-parser');

const app = express();

const homeRouter = require('./routes/homeRoutes')

app.use("/",homeRouter)


app.use(cors());
app.use(bodyParser.json());

const authRoutes=require('./routes/authRoutes.js');
app.use("/auth",authRoutes )

module.exports = {app};

