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
console.table(peeps);

// 1) Add a boolean property "isAwesome" for each peep and set it to "true" if the person has at least 3 favorite numbers (or false if not)...
peeps.forEach((p) => (p.isAwesome = p.favoriteNumbers.length >= 3));

// 2) Return a new array called "youngPeeps" with peeps 25 or younger...
const youngPeeps = peeps.filter((p) => p.age < 25);

// 3) Sort the "favoriteNumbers" property from least to greatest for each peep in the peeps array...
peeps.forEach((p) => {
  p.favoriteNumbers.sort((a, b) => a - b);
});
peeps.forEach((p) => console.log(p.favoriteNumbers));

// 4) Return "true" if every person has an age below 50 and "false" if not...
const allUnder50 = peeps.every((p) => p.age < 50);
console.log("allUnder50", allUnder50);

// 5) Create a function called "findPeep" that returns the peep for an ID passed in and returns "not found" if the peep does not exist. Call it for an ID that EXISTS and one that does NOT...
function findPeep(id) {
  const peepFound = peeps.find((p) => p.id === id);
  return peepFound ? peepFound : "Not found";
}
console.log(findPeep(1));

// 6) Create a new array called "reversedPeeps" with the peeps array order reversed...
const reversedPeeps1 = [...peeps.reverse()]; // NOTE: This method mutates the original array AS WELL!
const reversedPeeps2 = [...peeps].reverse(); // This method DOES NOT
console.table(reversedPeeps1, reversedPeeps2);

// 7) Add an additional property on each peep object called favoriteNumbersSum with a single number value which equals the total of all of their favorite numbers...
peeps.forEach((p) => {
  p.favoriteNumbersSum = p.favoriteNumbers.reduce((a, b) => a + b);
});

// 8) Create a new array called "numberOnePeeps" with all people that include a favorite  number of "1". Include only their "names" and "ids" in the new array...
const numberOnePeeps = peeps
  .filter((p) => p.favoriteNumbers.includes(1))
  .map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
console.log("numberOnePeeps", numberOnePeeps);

// 9) Combine all peeps from the numberOnePeeps (#8 above) which are also in the youngPeeps (#2 above) array into a new array called "freshPeeps". Include peeps with unique "ids" only from youngPeeps array...
const freshPeeps = [...numberOnePeeps];
youngPeeps.forEach((p) => {
  if (!freshPeeps.find((fp) => fp.id === p.id)) {
    freshPeeps.push(p);
  }
});
console.table("freshPeeps", freshPeeps);

// 10) Return a single value representing the total of all "favoriteNumbers" for anyone with the "isAwesome" property set to "true" (HINT: Should be equal to 484)...
const totalOfAllFavoriteNumbers = peeps
  .filter((p) => p.isAwesome)
  .reduce((a, b) => a + b.favoriteNumbersSum, 0);
console.log("totalOfAllFavoriteNumbers", totalOfAllFavoriteNumbers);
