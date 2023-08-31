/* 
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jinas_matilda = "JM";
let $function = 27;

//Variable name contentions
let Person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof 23);
// console.log(typeof "Jonas");
// console.log(typeof javascriptIsFun);

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "coder";
job = "teacher";

lastName = "Schmedtman";
console.log(lastName);


//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // x = x +10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1 = 101
x--;
x--; //x = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

console.log(2 ** (2 + 1));


const firstName = "John";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + "year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`string with
multiple
lines`);


const firstName = "Sarah";
const age = 15;

console.log(
  `${firstName} is ${age}, is ${
    age >= 18 ? "available" : "unvailable"
  } to drive's license`
);

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}



//Type Conversion and Coercion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");

let n = "1" + 1; // '11'
n = n - 1; //10
console.log(n);


// 5 falsy values to convert to boolean values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("Yo should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Heigh is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = 18;
if (age === 18) console.log("You became an adult ;D (strict)");

if (age === 18) console.log("You became an adult ;D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  //22 === 23 -> FALSE
  //'23' == 23
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is an awesome number");
} else if (favourite === 9) {
  console.log("9 is also an awesome number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);
if (favourite != 23) console.log("Why not 23?");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

const minimumScore = 100;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
  console.log("Dolphins team Win");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimumScore) {
  console.log("Koalass team Win");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= minimumScore &&
  scoreKoalas >= minimumScore
) {
  console.log("Both win the trophy, it's a draw");
} else {
  console.log("No one wins the trophy 😥");
}
*/

const day = "tuesday";

/* switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
} 

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


const age = 12;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 🥛");

const drink = age >= 18 ? "wine 🍷" : " water 🥛";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 🥛";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : " water 🥛"}`);


const bill = 275; //275, 40 and 430
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

const bills = [275, 40, 430];

bills.forEach(function (el, i) {
  let billWithTip = el >= 50 && el <= 300 ? el * 1.15 : el * 1.2;
  let tip = el >= 50 && el <= 300 ? el * 0.15 : el * 0.2;
  console.log(
    `The bill was ${bills[i]}, the  tip was ${tip} and the total value is ${billWithTip}`
  );
});

*/
