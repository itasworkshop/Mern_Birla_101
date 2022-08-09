const express = require('express')
const router = require("./Router/router")
const app = express()
const port = 3000


app.get('/calculator/:number1/:number2', (req, res) => {
  const number1 = req.params.number1;
  const number2 = req.params.number2;
  let add = parseFloat(number1) + parseFloat(number2);
  let multi = parseFloat(number1) * parseFloat(number2);
  let divide = parseFloat(number1) / parseFloat(number2);
  let subtraction = parseFloat(number1) - parseFloat(number2);
  res.json({"Number1" : number1, "Number2" : number2 ,"Addition" : add ,"Subtration" :subtraction, "Multiply" : multi, "Divition" : divide });
})


app.use(router);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

