/* enums */
/* An enum is a special "class" that represents a group of constants (unchangeable variables). */
/* numeric and string */

/* numeric enums, keys: 0..n */
enum Pupils {
  "Peter" = 2,
  "John",
  "Sam",
}

console.log(Pupils[4], Pupils.Peter)

let peter1 = Pupils.Peter

console.log(peter1)

peter1 = Pupils.Sam

console.log(peter1)

/* fully initialized */
enum Errors {
  NotFound = 404,
  Redirect = 301,
  OK = 200
}

console.log(Errors[404])
console.log(Errors.Redirect)
