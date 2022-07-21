
Quest 1:
<a href ="https://www.goggle.com" onclick ="console.log('link clicked');">
link one</a>
<a href ="https://www.goggle.com" onclick ="console.log('link clicked');
return false">
link two</a>

output - if we click link one in console it will print 'link clicked' message but after some time it will not redirect to google.com it keep on search and issue on browser
output - if we click link two in console it will print 'link clicked' message but immediately it return false



Quest: 2
var student = {
  	name: "john",
  	getName: function(){console.log("student" +this.name);}
}

var employee = {
  name: "Tom",
  getName: function(){console.log("employee"+this.name);}
}

var run = employee.getName.bind(student);
run(); 

Ans : employeejhon 

Explanation : in getName function binded student variable and in getname console called student(this refer to name object) so we will get student name but in run called employee.getname so employee printing before name.



Quest: 3.
x= 10;
function foo(x){
x= 20;
delete x;
return x;
}
console.log(foo(5))
Ans-20
explain - we are returning foo function x value for x declared 20 even if we delete x again calling return x so now x is 20. 


Quest :4
function foo(){
  	var a;
  	console.log(a);
  	a = 10;
  return a;
}
foo();

Ans: undefined
Explanation : var a assigned but not declared value so in console getting undefined
function foo(){
  	var a;
  	
  	a = 10;
  	console.log(a);
  return a;
}
foo();
if you console after value assigned the can get output as 10


Quest:5
function evenodd(n){
  return n%2 !== 0;
}
myarray = [1,2,3,4,5];
console.log(myarray.filter(evenodd));

Explanation: filter will print a odd numbers from value of array because using (n%2 !==0) so it prints Odd number. if it is (n%2 ===0)


Quest:6
var myArray = ['80','90',100];

function compare(i,j){
  return i-j;
}

var a = myArray.sort(); 


var b = myArray.sort(compare); 


console.log(a === b);

Explanation : in var a sort myArray. in var b it will not sort but both a and b callin myArray value so both will be always equal


Quest:7
myFruits = ['apple','banana','orange'];
const [c, ...d] = myFruits;

console.log(c); 


console.log(d); 

Ans: apple
	 ['banana','orange']
	 
Explanation: first value of array print in c. rest of the array objects are there in "d"


Quest:8

printme();
function printme()
{
console.log("hello from function");
}
var obj = new printmetoo();
obj.printme();
class printmetoo{
printme()
{
console.log("hello");
}
}

Ans: printmetoo is not defined
	 
	 


