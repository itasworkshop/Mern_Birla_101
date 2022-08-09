const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/calculation/:num1/:num2", (req, res) => {
  const add = Number(req.params.num1) + Number(req.params.num2);
  const sub = Number(req.params.num1) - Number(req.params.num2);
  const mul = Number(req.params.num1) * Number(req.params.num2);
  const div = Number(req.params.num1) / Number(req.params.num2);
  res.send(
    `"Hello this is addition page response!"  ${add}  "Hello this is substraction page response!"  ${sub}  "Hello this is multiplication page response!"  ${mul}  "Hello this is division page response!"  ${div}`
  );
});

app.get("/grade/:number", (req, res) => {
  if (req.params.number >= 90 && req.params.number < 100) {
    res.send("Grade A");
  } else if (req.params.number >= 80 && req.params.number < 90) {
    res.send("Grade B");
  } else if (req.params.number >= 70 && req.params.number < 80) {
    res.send("Grade C");
  } else if (req.params.number <= 70) {
    res.send("Fail");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
