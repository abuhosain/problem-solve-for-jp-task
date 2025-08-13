// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
  { name: "Dave", age: 28, gender: "male" },
];

const maleNames = people
  .filter(person => person.gender === "male")
  .map(person => person.name);

// console.log(maleNames);


// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const bookTitles = books.map(book => book.title);

// console.log(bookTitles); 

// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;

// Function composition
const composedFunction = x => addFive(double(square(x)));

// console.log(composedFunction(3)); 


// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const person = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 22 },
];

function updateAge(name, newAge) {
  const person = person.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
}

updateAge("Bob", 35);
// console.log(person);



// 7.   Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2024;
// console.log(`${year} is ${isLeapYear(year) ? "a leap year" : "not a leap year"}`);
 
