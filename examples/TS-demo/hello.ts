interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }

function mytest(person : Person):string{
    return 'hello world ' + person.firstName + " " + person.lastName;
}

//let user = { firstName: "Jane", lastName: "User", middlename:"Nillson"};
let user = new Student("Jane", "M.", "User");

//document.body.textContent = mytest(50);
document.body.textContent = mytest(user);