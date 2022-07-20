// WAP to perform sorting of below data based on id and name(create class, object and a method for sorting in util class)
// {id:101,name:raj}
// {id:121,name:rajesh}
// {id:130,name:suraj}
// {id:114,name:tom}
arr = [
    {id:101,name:"raj",cmarks:45,pmarks:55,mmarks:67},
	{id:102,name:"rajesh",cmarks:65,pmarks:85,mmarks:77},
	{id:103,name:"suraj",cmarks:43,pmarks:55,mmarks:60},
	{id:104,name:"tom",cmarks:71,pmarks:65,mmarks:70}
    ];
    
  function maximum() {
      result = arr.filter((a) => {
         a.total = a.cmarks + a.pmarks + a.mmarks;
         return
    }); 
    
  } maximum()
    console.log(arr);