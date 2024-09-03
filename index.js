const express = require('express')
const app = express()
const port = 3000
 const myLogger = function (req,res,next) {
  console.log("LOGGER");
  next();
 }


 app.use(myLogger);
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/',(req,res) => {
  res.send('Accessed post method')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})