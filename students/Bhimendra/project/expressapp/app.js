const express = require('express')
const app = express()
const port = 4000


app.get("/calc/:num1/:num2", (req, res) => {
  const addition = Number(req.params.num1) + Number(req.params.num2);
  const substraction = Number(req.params.num1) - Number(req.params.num2);
  const multiply = Number(req.params.num1) * Number(req.params.num2);
  const division = Number(req.params.num1) / Number(req.params.num2);
  res.send(
    `"Hello this is addition page response!"  ${addition}  "Hello this is substraction page response!"  ${substraction}  "Hello this is multiplication page response!"  ${multiply}  "Hello this is division page response!"  ${division}`
  );
});

app.get("/grade/:num", (req, res) => {
  if (req.params.num > 90 && req.params.num <= 100) {
    res.send("Grade A");
  } else if (req.params.num > 80 && req.params.num <= 90) {
    res.send("Grade B");
  } else if (req.params.num > 70 && req.params.num <= 80) {
    res.send("Grade C");
  } else if (req.params.num <= 70 && req.params.num>0) {
    res.send("Failed");
  }else if(req.params.num>100){
    res.send("Enter between 0-100 number")
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})