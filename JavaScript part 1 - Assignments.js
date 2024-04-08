/*
Values and Variables
Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)
- Log their values to the console
Data Types
- Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
- Log the types of 'isIsland', 'population', 'country' and 'language' to the console
Basic Operators
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?                                               
2. Increase the population of your country by 1 and log the result the console                                               
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does your country have less people than the average country?                                             
5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

let country = "Romania"
let continent = "Europe"
let population = 19892812
let isIsland = false
let language
let description = (`${country} is in ${continent}, and its ${population} million people speak ${language = "Romanian"}.`)

console.log(`Country = ${country} | Continent = ${continent} | Population = ${population}`)
console.log(`Island? = ${isIsland} | Population = ${population} | Country = ${country} | Language = ${language}`)
console.log(`Population in each half will be : ${population / 2}`)
console.log(`${++population}`)

let popFinland = 6000000
let avgCountry = 33000000

if (popFinland > population) {
    console.log(`Finland has a bigger population than ${country}.`)
} else {
    console.log(`${country} has a bigger population than Finland.`)
}

if (population >= avgCountry){
    console.log(`My country has a bigger population than an average country.`)
} else {
    console.log(`My country has a smaller population than an average country.`)
}

console.log(description)

/*
Equality Operators: == vs. ===                                
1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now)                                                 
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1                                                 
4. Use an else block to log 'Noborders' (this block will be executed when 'numNeighbours' is 0 or any other value)                                                 
5. Test the code with different values of 'numNeighbours', including 1 and 0                 
6. Change ==to===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?                                                
7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1                                        
8. Reflect on why we should use the === operator and type conversion in this situation
*/

let numNeighbours = parseInt(prompt('How many neighbour countries does your country have? '));

if (numNeighbours === 1){
    console.log("Only 1 border!")
} else if (numNeighbours > 1){
    console.log("More that 1 border!")
} else {
    console.log("Noborders!")
}
/// When using == JavaScript tries to convert both operands to a common type before comparing.
/// When using === JavaScript checks if both the type and value of the value is the same when comparing.
/// We convert the number using parseInt to ensure the input is treated as a number even if the user enters a string.
/// Using === reduces the possibility of bugs to ensure and makes the outcomes more predictable.

/*
Logical Operators                                
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.        
3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.                        
4. If yours is the right country, log as string like this: 'You should live in Portugal:)'. If
   not, log 'Portugal does not meet your criteria :('                                        
5. Your country probably does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D)
*/

let country = "Romania"
let population = 19892812
let isIsland = false
let language = "Romanian"

if (population <= 50000000 && isIsland == false && language === "English" ) {
    console.log(`You should live in ${country} :)`)
} else {
    console.log(`${country} does not meet your criteria :(`)
} 

/*
Strings and Template Literals                                        
Recreate the description  variable from the last assignment (basic operators), this time using the template literal syntax   
*/

let country = "Romania"
let continent = "Europe"
let population = 19892812
let isIsland = false
let language = null
let description = `${country} is in ${continent}, and its ${population} million people speak ${language = "Romanian"}.`

console.log(description)

/*
Type Conversion and Coercion                                
1. Predict the result of these 5 operations without executing them:
a) '9' - '5';
b) '19' - '13' + '17';
c) '19' - '13' + 17;
d) '123' < 57;
e) 5 + 6 + '4' + 9 - 4 - 2;                                
2. Execute the operations to check if you were right
*/

sum1 = '9' - '5'
sum2 = '19' - '13' + '17'
sum3 = '19' - '13' + 17
sum4 = '123' < 57
sum5 = 5 + 6 + '4' + 9 - 4 - 2
console.log(sum1) //4
console.log(sum2) //617
console.log(sum3) //23
console.log(sum4) //false
console.log(sum5) //1143

/*
if / else Statements
1. If your country's population is greater than 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)                                        
2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

let country = "Romania"
let population = 19892812
let avgPop = 33000000;

if (country.population >= avgPop) {
    console.log(`${country}'s population is ${population - avgPop} above the average.`);
} else {
    console.log(`${country}'s population is ${avgPop - population} below the average.`);
}

/*
Use a switch statement to log the following string for the given 'language':

f) Chinese or mandarin:  'MOST number of native speakers!'
g) Spanish: '2nd place in number of native speakers'
h) English: '3rd place'                                
i) Hindi: 'Number 4'
j) Arabic: '5th most spoken language'
for all other simply log 'Great language too :D'     
*/

language = "Romanian"

switch (language) {
    case "Chinese"  && "Mandarin":
        console.log('MOST number of native speakers!');
        break;
   case "Spanish":
        console.log('2nd place in number of native speakers');
        break;
   case "English":
        console.log('3rd place');
        break;
   case "Hindi":
       console.log('Number 4');
       break;
   case "Arabic":
       console.log('5th most spoken language');
       break;
   default:
        console.log('Great language too :D');
   }