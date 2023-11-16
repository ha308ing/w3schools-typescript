/* keyof */
/*
is used to extract the key type from an object type.
*/

// explicit keys
/*
When used on an object type with explicit keys,
  keyof creates a union type with those keys.
*/
interface KPerson {
  name: string
  age: number
}

// `keyof Person` here creates a union type of "name" and "age",
// other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`person property ${property}: ${person[property]}`)
}

let kperson = {
  name: "max",
  age: 11
}

printPersonProperty(kperson, "name")


// keyof with index signatures
/*
keyof can also be used with index signatures to extract the index type.
*/
type KStringMap = Record<string, unknown>
// keyof `KStringMap` resolves to `string`
function createStringPair(property: keyof KStringMap, value: string): KStringMap {
  return { [property]: value }
}
