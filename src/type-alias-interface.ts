/* type aliases and interfaces */
/*
TypeScript allows types to be defined separately from the variables that use them.
Aliases and Interfaces allows types to be easily shared between different variables/objects.
*/

type CarYear = number
type CarModel = string
type CarColor = string
type Car = {
  year: CarYear,
  model: CarModel,
  color: CarColor
}

let toyota: Car = {
  year: 1964,
  model: "toyota",
  color: "blue",
  // size: "big"
}


/* interfaces are like types, but ONLY apply for object types */
interface Plane {
  Model: string,
  Type: string,
  Speed: number
}

let boeing: Plane = {
  Model: "boeing",
  Type: "Lainer",
  Speed: 12
}

// interfaces can extend each other
interface Fish {
  IsSwim: boolean
}

interface Shark extends Fish {
  Hungry: boolean
}

let tiana: Shark = {
  Hungry: true,
  IsSwim: true
}
