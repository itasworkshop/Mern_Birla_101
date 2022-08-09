const express = require('express')
const app = express()
const port = 3000


//get request for home path
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//http://localhost:3000/students
// app.get('/students', (req, res) => {
//     res.send('Hello from students page response!')
// })

//http://localhost:3000/students/rajesh
app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    res.send('Hello from students page response!'+id)
})

app.get('/students/:name/:cmark/:mmark/:pmark', (req, res) => {
    const name = req.params.name;
    const cmark = req.params.cmark;
    const mmark = req.params.mmark;
    const pmark = req.params.pmark;
    const total = parseInt(cmark ) + parseInt(mmark) + parseInt(pmark)
    // console.log(data);

    res.send('Name: ' +name +` Chemistry Mark : `+cmark +` Maths Mark : ` +mmark +` Physics Mark : `+pmark  +" Total = " + total)
    const data = localStorage.setItem('date', {"name":name, "cmark":cmark, "mmark": mmark , "pmark" : pmark , "total": total})
    console.log(data);

})
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})