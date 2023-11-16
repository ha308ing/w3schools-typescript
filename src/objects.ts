/* objects */

let car: { brand: string; color: string; year: number } = {
  brand: "toyota",
  color: "red",
  year: 1964,
};

let tree = {
  height: 25,
};

// tree.height = "hello" // error - inferred type is number
tree.height = 1;

/* optional properties */
let animal: { color: string; rate?: number } = {
  color: "red",
  rate: 25,
};

animal = { color: "green" };

// let house: { color: string, rate: number } = {
//   color: "red",
// }

/* index signatures */
// same as Record<string,string>
let person: Record<string, string> = {};
// let person: { [key: string]: string } = {}
person.name = "peter";
person.age = "25";
console.log(person);
