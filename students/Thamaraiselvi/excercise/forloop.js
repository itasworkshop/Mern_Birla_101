Right Side

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

bottom to top increment

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


top to bottom increment

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



Pyramid * 


let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



Reverse Pyramid
let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);