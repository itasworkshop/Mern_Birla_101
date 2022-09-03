var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function mytest(person) {
    return 'hello world ' + person.firstName + " " + person.lastName;
}
//let user = { firstName: "Jane", lastName: "User", middlename:"Nillson"};
var user = new Student("Jane", "M.", "User");
//document.body.textContent = mytest(50);
document.body.textContent = mytest(user);
