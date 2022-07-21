const studentsMarks = [
    { id: 101, name: "raj", cmarks: 45, pmarks: 55, mmarks: 67 },
    { id: 102, name: "rajesh", cmarks: 65, pmarks: 85, mmarks: 77 },
    { id: 103, name: "suraj", cmarks: 43, pmarks: 55, mmarks: 60 },
    { id: 104, name: "tom", cmarks: 71, pmarks: 65, mmarks: 70 },
  ]
 
  result = []
  studentsMarks.forEach(o => {
    totalResult = (o.cmarks + o.pmarks + o.mmarks)
    percentage = (totalResult / 300) * 100;
    result.push({
      id:o.id,
      name:o.name,
      marks:totalResult,
      percent:percentage
    })
   
    
  });
 
  value = result.reduce((prev, current) => (prev.percent > current.percent) ? prev : current);
  
  console.log(value.name + " is scored " + value.percent + " %")