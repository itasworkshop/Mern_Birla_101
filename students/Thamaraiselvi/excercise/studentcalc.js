class Number{
  //input
  constructor( number1,number2 ){
    this.number1 = number1;
    this.number2 = number2;
   
  }
  getIntro(){
      console.log("Numbers is : " + this.number1 +" , "+ this.number2 );
  }
  getAdd(){
    var add = this.number1 + this.number2;
    console.log(" ADD : " + add);
  }
  getSub(){
    var sub = this.number1 - this.number2;
    console.log("Sub : " + sub);
  }
  getMulti(){
    var multi = this.number1 * this.number2;
    console.log("Multiple: " + multi);
  }
  getDivide(){
  var divide = this.number1 / this.number2;
  console.log("Divisible: " + divide);
  }
}