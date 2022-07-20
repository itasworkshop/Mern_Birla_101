var array = [
 {id:101,name:"raj"},
	{id:121,name:"rajesh"},
	{id:130,name:"suraj"},
	{id:114,name:"tom"},
];

array.sort(function(a, b) {
  return a.id - b.id;
});
console.log(array)