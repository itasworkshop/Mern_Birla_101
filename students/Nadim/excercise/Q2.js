// WAP to calculate maximum % scored student report from below data.
// {id:101,name:raj,cmarks:45,pmarks:55,mmarks:67}
// {id:102,name:rajesh,cmarks:65,pmarks:85,mmarks:77}
// {id:103,name:suraj,cmarks:43,pmarks:55,mmarks:60}
// {id:104,name:tom,cmarks:71,pmarks:65,mmarks:70}

aa = [ 
    {id:101, name:"raj"},
	{id:121, name:"rajesh"},
	{id:130, name:"suraj"},
	{id:114, name:"tom"}
	];
    
  result =  aa.sort(function(a,b){
       return a.id - b.id;
    });console.log(result)