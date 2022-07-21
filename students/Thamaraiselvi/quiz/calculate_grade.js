arr = 	{id:104,name:"tom",cmarks:81,pmarks:80,mmarks:70}
    
   let val = (arr.cmarks + arr.pmarks +  arr.mmarks)

percentage = (val / 300) * 100;
console.log(percentage)
if(percentage <= 100 && percentage >=90){
  console.log("grade A")
}
else if(percentage <= 89 && percentage >=80){
  console.log("grade B")
}
else if(percentage <= 79 && percentage >=70){
  console.log("grade C")
}
else{
   console.log("Failed")
}