/*
1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. 
For instance, pockets.pen should be 3 (found in table), 
and bed.glasses should be 1 (found in head).
2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. 
*/

let head = {
    glasses: 1  
  };
  
  let table = {
    pen: 3  
  };
  
  let bed = {
    sheet: 1,  
    pillow: 2
  };

  let pockets = {  
    money: 2000  
  };

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);

///Benchmark
function benchmark(obj, prop) {
    let start = performance.now();
    let value = obj[prop];
    let end = performance.now();
    return end - start;
}

let timePockets = benchmark(pockets, 'glasses');
let timeHead = benchmark(head, 'glasses');

console.log("Time taken for pockets.glasses:", timePockets, "milliseconds");
console.log("Time taken for head.glasses:", timeHead, "milliseconds");


if (timePockets < timeHead) {
    console.log("pockets.glasses is faster");
} else if (timeHead < timePockets) {
    console.log("head.glasses is faster");
} else {
    console.log("Both property lookups have similar speed");
}

const iterations = 1000000;

console.time('pockets.glasses');
for (let i = 0; i < iterations; i++) {
let value = pockets.glasses; // Access via prototype chain
}
console.timeEnd('pockets.glasses');

console.time('head.glasses');
for (let i = 0; i < iterations; i++) {
let value = head.glasses; // Direct property access
}
console.timeEnd('head.glasses');

/*
We have rabbit inheriting from animal.
If we call rabbit.eat(), which object receives the full property: animal or rabbit?
*/

let animal = {
    eat() {  
      this.full = true;    
    }  
  };
  
  let rabbit = {  
    __proto__: animal  
  };

console.log("Before call:", rabbit);
rabbit.eat();
console.log("After call:", rabbit);

//rabbit is called
//js looks for eat method but cant find it so it follows the prototype chain 
//finds eat method in animal object
//method is executed while referring to the rabbit and full property is added to rabbit object

/*
Task 1. The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.
function Clock({ template }) {

    let timer;
    function render() {
     let date = new Date();
      let hours = date.getHours();
     if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;
      let output = template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);
      console.log(output);
   }
   
    this.stop = function() {
     clearInterval(timer);
   };

    this.start = function() {
     render();
     timer = setInterval(render, 1000);
   };

  }
  let clock = new Clock({template: 'h:m:s'});
 clock.start();
*/

class Clock {
    constructor({ template }) {
      this.template = template;
      this.timer = null;
    }
  
    render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  let clock = new Clock({ template: 'h:m:s' });
  clock.start();
  
/*
Write a function count(obj) that returns the number of properties in the object:
*/

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
return Object.keys(obj).length;
}
console.log(count(user));

/*

Task 2.
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries 
using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.
*/

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
      sum = sum + salary;
  }
  return sum;
}

let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};

console.log(sumSalaries(salaries));

/*
We have an object:

let user = {

  name: "John",

  years: 30

};


Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
Here’s an example of the values after your assignment:
let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user
console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
*/

let user = {
  name: "John", 
  years: 30 };


let { name, years: age, isAdmin = false } = user;

console.log(name); 
console.log(age); 
console.log(isAdmin); 

/*
Let arr be an array.
Create a function unique(arr) that should return an array with unique items of arr.
For instance:

function unique(arr) {
  ///your code
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];


console.log( unique(values) ); // Hare, Krishna, :-O

P.S. Here strings are used, but can be values of any type.
P.P.S. Use Set to store unique values.
*/

function unique(arr) {
  let set = new Set(arr);
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values));

/*
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
But that doesn’t work:
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?
*/

let map = new Map();
map.set("name", "John");
let keys = [...map.keys()]; 

keys.push("more"); 
console.log(keys);

keys.pop(); 
console.log(keys);

keys.shift(); 
console.log(keys);