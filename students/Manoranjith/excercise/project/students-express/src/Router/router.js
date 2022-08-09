const express = require('express');
const router = new express.Router();
const crypto = require("crypto");


router.get('/students/:name/:cmark/:mmark/:pmark', (req, res) => {
    const name = req.params.name;
    const cmark = req.params.cmark;
    const mmark = req.params.mmark;
    const pmark = req.params.pmark;
    const id = crypto.randomBytes(3*4).toString("hex");
    const total = parseInt(cmark ) + parseInt(mmark) + parseInt(pmark)
      let avg = (total)/3;
      let Grade =""
       if(avg >=90 && avg <= 100){
         Grade = "A";
       }else if(avg>=80 && avg<90){
          Grade = "B";
       }else if(avg>=70 && avg<80){
         Grade = "C";
       }else {
         Grade = "U";
       }

    res.json({"id" : id , "Name" : name ,"Chemistry" : cmark, "Maths" : mmark,"Physics" : pmark,"Total" : total, "Average" : avg, "Grade" : Grade   });
    const data = localStorage.setItem('date', {"name":name, "cmark":cmark, "mmark": mmark , "pmark" : pmark , "total": total})
}) 

module.exports = router