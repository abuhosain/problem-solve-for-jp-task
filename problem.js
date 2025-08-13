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