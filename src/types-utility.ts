/* utility types */
/*
TypeScript comes with a large number of types
  that can help with some common type manipulation,
  usually referred to as utility types.
*/

// Partial
// changes all the properties in an object to be optional
interface UPoint {
  x: number;
  y: number;
}

let pointPart: Partial<UPoint> = {};
pointPart.x = 10;
console.log(pointPart);

// Required
// changes all the properties in an object to be required
interface UCar {
  model: string;
  color?: string;
  year: number;
}

let myCar: Required<UCar> = {
  model: "qq",
  year: 1966,
  color: "green", // now is required
};

// Record
// is a shortcut to defining an object type with a specific key type and value type
// Record<string, number> is equivalent to {[key: string]: number}
const UPerson: Record<string, number> = {
  height: 12,
  age: 33,
};

// Omit
// removes keys from an object type
interface UPerson {
  name: string;
  age: number;
  location?: string;
}

let bob: Omit<Person, "age" | "location"> = {
  name: "Peter",
};

// Pick
// removes all but the specified keys from an object type
let tom: Pick<UPerson, "name"> = {
  name: "Tom",
};

// Exclude
// removes types from a union
type UPrimitive = string | number | boolean;
const value: Exclude<UPrimitive, boolean> = "value";

// ReturnType
// extracts the return type of a function type
type PointGenerator = () => { x: number; y: number };
const upoint: ReturnType<PointGenerator> = { x: 3, y: 5 };

// Parameters
// extracts the parameter types of a function type as an array
type getArea = (height: number, width:number)=>number
const potentialAreal: Parameters<getArea>[0] = 12

type PointPrinter = (p: { x: number, y: number }) => void
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 25
}

// Readonly
// is used to create a new type where all properties are readonly
const personReadonly: Readonly<UPerson> = {
  age: 12,
  name: "Tom",
  location: "town"
}
// personReadonly.age = 12
