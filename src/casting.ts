/* casting */
/* Casting is the process of overriding a type. */

// as
// casting doesn't change the type of the data
const str1: unknown = "hello" // if would be number, would fail
console.log((str1 as string).length)

// <>
const str2: unknown = "hi"
console.log((<string>str2).length)

// force casting
const str3 = 5
console.log(((str3 as unknown) as string).length)
