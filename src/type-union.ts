/* union types */
/* Union types are used when a value can be more than a single type. */

function printStatusCode(code: string | number) {
  console.log(typeof code === "string" ? code.toUpperCase() : code);
}

printStatusCode(404);
// printStatusCode([404,'jekk'])
printStatusCode("505");
