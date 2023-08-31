/* 1 - This is the first assigment
LECTURE: Values and Variables */

/* let country = "Peru";
let continent = "America";
let population = 30000000;

console.log(
  "Country: " +
    country +
    " and continent: " +
    continent +
    " and population: " +
    population
); */

/* 1 - This is the first Challenge
Coding Challenge #1 */

/* let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
// const bmi = mass / height ** 2;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
 */

//1LECTURE: Values and Variables

let country = "Perú"; //Perú
let continent = "America"; //America
let population = 33.72; //33.72
console.log(
  `1 - ${country} is a country, in ${continent} continent, with a population of ${population.toLocaleString()} millions`
);

//2LECTURE: Data Types
let isIsland = false;
console.log(typeof isIsland, typeof population, typeof country);
/* const language;
console.log(
  `2 - ${isIsland}, ${population.toLocaleString()}, ${country}, ${language}`
); */

//3LECTURE:let, const and var
let language = "spanish";

//4LECTURE:Basic Operators

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

country = "Portugal";
continent = "Europe";
population = 11;
language = "portuguese";

const description1 =
  "2 - " +
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
console.log(description1);

//5LECTURE:Strings and Template Literals
console.log(
  `3 - ${country} is in ${continent}, and it's ${population} million people speak ${language}`
);

//6LECTURE: Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`4 - ${country}'s population is above average`);
} else {
  console.log(
    ` 4 - ${country}'s population is ${33 - population} million below average`
  );
}

//7LECTURE: Type Conversion and Coercion
/* '9' - '5';// 4
'19' - '13' + '17';// 617
'19' - '13' + 17;// 23
'123' < 57;// false
5 + 6 + '4' + 9 - 4 - 2; // 117
*/
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//8LECTURE: Equality Operators: == vs. ===
/* const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
} */

//9LECTURE: Logical Operators
country = "USA"; //Portugal
continent = "America";
population = 331.9; //11
language = "english";
isIsland = false;

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

//10LECTURE: The switch Statement
language = "english";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!'");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4'");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

//11LECTURE: The Conditional (Ternary) Operator
country = "Portugal"; //Portugal
population = 11; //11

console.log(
  `${
    population > 33
      ? `${country}'s population is above average'.`
      : `${country}'s population is below average'.`
  }`
);

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
