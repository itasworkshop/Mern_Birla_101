const express = require('express')
const app = express()
const port = 3000


//get request for home path
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//http://localhost:3000/students
app.get('/students', (req, res) => {
    res.send('Hello from students page response!')
})

//http://localhost:3000/students/rajesh
app.get('/students/:name', (req, res) => {
    const name = req.params.name;
    res.send('Hello from students page response!'+name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})