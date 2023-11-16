// A tuple is a typed array with a pre-defined length and types for each index.

// define tuple
let tuple: [string, number[], number]

// initialize
tuple = ["hello", [1,2,3], 12]

tuple.push('hello') // allowed, so use readonly

console.log(tuple)

let readonlyTuple: readonly [string, string] = ["hello", "bye"]

// readonlyTuple.push("qq") // not allowed

console.log(readonlyTuple)

// named tuples
let coord: readonly [x: number, y: number] = [15, 34]

// coord.push(12)

const [x,y] = coord

console.log(coord, x, y)
