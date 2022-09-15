// BEGINNER CHALLENGES - Unless otherwise stated, use the names array for all challenge questions
const names = ["Jayden", "Chris", "Hailey", "Zac", "Cory", "Trevor", "Tyler"];

// 1) Add a name to the beginning of the names array...
names.unshift("Timmy");

// 2) Add a name to the end of the names array...
names.push("Bobby");

// 3) Remove the name you added to the beginning of the names array...
names.shift();

// 4) Remove the name you added to the end of the names array (return the name to an original)...
names.pop();

// 5) Create a new array called "lowercaseNames" with each name modified to lowercase...
//      '...' = Spread Operator
const lowercaseNames = [...names.map((name) => name.toLowerCase())];

// 6) Sort the names array alphabetically...
names.sort();

// 7) Find the index of "Cory"...
const coryIndex = names.indexOf("Cory");

// 8) Create a new array called "afterCory" with all names following "Cory" in the names array...
const afterCory = names.slice(coryIndex + 1);

// 9) After the original array to only contain the names before "Cory"...
names.splice(coryIndex);

// 10) Return "true" if the names array contains "Cory" and "false" if it does not (hint: it should be false now)...
const includesCory = names.includes("Cory");

// INTERMEDIATE CHALLENGES - Unless otherwise stated, use the peeps array for all challenge questions
const peeps = [
  {
    id: 1,
    name: "Chris",
    age: 27,
    favoriteNumbers: [1, 4, 8, 12, 32],
  },

  {
    id: 2,
    name: "Jayden",
    age: 24,
    favoriteNumbers: [1, 4],
  },

  {
    id: 3,
    name: "Hailey",
    age: 27,
    favoriteNumbers: [1, 4, 12, 32, 64],
  },

  {
    id: 4,
    name: "Zac",
    age: 28,
    favoriteNumbers: [2, 4, 6, 8],
  },

  {
    id: 5,
    name: "Cory",
    age: 28,
    favoriteNumbers: [3, 6, 9, 12, 15],
  },

  {
    id: 6,
    name: "Trevor",
    age: 27,
    favoriteNumbers: [69, 420],
  },

  {
    id: 7,
    name: "Tyler",
    age: 28,
    favoriteNumbers: [1, 4, 8, 12, 32, 64, 128],
  },
];

// 1) Add a boolean property "isAwesome" for each peep and set it to "true" if the person has at least 3 favorite numbers (or false if not)...
peeps.forEach((p) => (p.isAwesome = p.favoriteNumbers.length >= 3));

// 2) Return a new array called "youngPeeps" with peeps 25 or younger...
const youngPeeps = peeps.age <= 25;
console.log("peeps", peeps);
