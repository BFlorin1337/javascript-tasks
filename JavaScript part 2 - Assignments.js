/* 
Functions                                 
Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'                                                
Call this function 3 times,with input data for 3 different countries.Store the returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity){
    return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

console.log(describeCountry("Romania", "19 million", "Bucharest"));
console.log(describeCountry("Ukraine", "38 million", "Kyiv"));
console.log(describeCountry("United States", "333 million", "Washington, D.C."));
console.log(describeCountry("France", "68 million", "Paris"));

/*
Function Declarations vs. Expressions
The world population is 7900 million people.Create Function Declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population                                                
To calculate the percentage, divide the given population value by 7900 and then multiply by 100                                                 
Call 'percentageOfWorld1' for 3 populations of countries your choice, store the results into variables, and log them to the console                                        
Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(country, population){
    return `The country of ${country} makes up ${(population / 7900) * 100} % of the world population`;
}

console.log(percentageOfWorld1("China", 1441));
console.log(percentageOfWorld1("Romania", 19));
console.log(percentageOfWorld1("Ukraine", 38));
console.log(percentageOfWorld1("France", 68));


const percentageOfWorld2 = function (country, population) {
    return `The country of ${country} makes up ${(population / 7900) * 100} % of the world population`;
}

console.log(percentageOfWorld2("Germany", 84));
console.log(percentageOfWorld2("India", 1417));
console.log(percentageOfWorld2("Mexico", 127));
console.log(percentageOfWorld2("Canada", 39));


/*
Arrow Functions
Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

const percentageOfWorld3 = (country, population) => `The country of ${country} makes up ${(population / 7900) * 100} % of the world population`;

console.log(percentageOfWorld3("Japan", 125));
console.log(percentageOfWorld3("South Korea", 52));
console.log(percentageOfWorld3("Ethiopia", 123));
console.log(percentageOfWorld3("Egypt", 111));


/*
Functions Calling Other Functions
Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'                                                
To calculate the percentage,'describePopulation' call the 'percentageOfWorld1' you created earlier                                                 
Call 'describePopulation' with data for 3 countries your choice
*/

function percentageOfWorld1(country, population){
    return `${country} has ${population} people, which is about ${(population/7900) * 100}% of the world.`;
}

function describePopulation(country, population){
    return percentageOfWorld1(country, population);
}

console.log(describePopulation("Japan", 125));
console.log(describePopulation("South Korea", 52));
console.log(describePopulation("Ethiopia", 123));
console.log(describePopulation("Egypt", 111));

/*
Introduction to Array                        
Create an array containing 4 population values of 4 countries yourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'                                                 
Log to the console whether the array has 4 elements or not (true or false)         
Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values                                                                                                          
*/

let populations = [1417, 127, 84, 39];

const hasFourElements = populations.length === 4;
console.log(hasFourElements);

let percentages = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

percentages.push(percentageOfWorld1(1417)); 
percentages.push(percentageOfWorld1(127));  
percentages.push(percentageOfWorld1(84));   
percentages.push(percentageOfWorld1(39));   

console.log(percentages);

/*
Basic Array Operations (Methods)
Create an array containing all the neighbouring countries of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'                                        
At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array                
Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array                                                
If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'                                         
Change the name of one of your neighbouring countries.To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.        
*/

let neighbours = ["Moldova", "Hungary", "Bulgaria", "Serbia", "Ukraine"];

neighbours.push("Utopia");
neighbours.pop("Utopia");

if (!neighbours.includes("Germany")){
    console.log("Probably not a central European country :D");
}

neighbours[0] = "Republic of Moldova";

/*
Iteration: The for Loop
There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting' 
*/

for (let voters = 1; voters <= 50; voters++){
    console.log(`Voter number ${voters} is currently voting!`);
}

/*
Looping Arrays, Breaking and Continuing                                
Let's bring back the 'populations' array from a previous assignment                
Use a for loop to compute an array called 'percentages2 'containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier                                
Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is.  
*/

const populations = [1417, 127, 84, 39];
const percentage = [17.93670886075949, 1.6075949367088609, 1.0632911392405064, 0.4936708860759494];
const percentage2 = [];

function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {
    percentage2.push(percentageOfWorld1(populations[i]));
}

if (percentage.length === percentage2.length && percentage.join('') === percentage2.join('')) {
    console.log("Contain the same values.");
} else {
    console.log("The values are different.");
}

/*
Looping Backwards and Loops in Loops
Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];                                        
Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country                        
You will need a loop inside a loop for this.This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Poland', 'Sweden', 'Ukraine']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log('Neighbour:', listOfNeighbours[i][j]);
    }
}

/*
LECTURE: The while Loop                                
Recreate the challenge from the 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')                                
Reflect on what solution you like better for this task: the for loop or the while loop?        
*/

let populations = [1417, 127, 84, 39];
const worldPopulation = 7900;
let percentages3 = [];

let i = 0;
while (i < populations.length) {
    let percentage = (populations[i] / worldPopulation) * 100;
    percentages3.push(percentage);
    i++;
}

console.log("percentages3:", percentages3);

/*
Introduction to Objects                        
Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments) 
*/

let myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "Romanian",
    population: "19 million",
    neighbours: ["Moldova", "Hungary", "Bulgaria", "Serbia", "Ukraine"]
};

console.log(myCountry);

/*
Dot vs. Bracket Notation                                
Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'        
Increase the country 's population by two million using dot notation,and then decrease it by two million using brackets notation.
*/

let myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "Romanian",
    population: 19,
    neighbours: ["Moldova", "Hungary", "Bulgaria", "Serbia", "Ukraine"]
};

myCountry.population += 2;
myCountry["population"] -= 2;

console.log(myCountry.country + " has " + myCountry.population + " million " + myCountry.language + "-speaking people, " + myCountry.neighbours.length + " neighbouring countries and a capital called " + myCountry.capital);

/*
Object Methods                        
Add a method called 'describe' to the 'myCountry’ object.This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.                                
Call the 'describe' method                                                
Add a method called 'checkIsland' to the 'myCountry' object.This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

let myCountry = {
    country: "Romania",
    capital: "Bucharest",
    language: "Romanian",
    population: 19,
    neighbours: ["Moldova", "Hungary", "Bulgaria", "Serbia", "Ukraine"],
    describe() {
        console.log(this.country + " has " + this.population + " million " + this.language + "-speaking people, " + this.neighbours.length + " neighbouring countries and a capital called " + this.capital);
    },
    checkIsland(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);