/* functions */

// sepcify return type
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

// function doesn't return a value
function printHello(): void {
  console.log("hello");
}

printHello();

// parameters
function mul(a: number, b: number): number {
  return a * b;
}

// optional parameters
// default parameters
function add(a: number, b: number = 3, c?: number) {
  return a + b + (c || 0);
}

// names parameters
type numbers = {
  a: number;
  b: number;
};

function sum1({ a, b }: { a: number; b: number }) {
  return a + b;
}

let q: numbers = {
  a: 3,
  b: 4
}
console.log(sum1(q))

// rest parameters
let a: number[] = [1, 3, 5, 7]

function sum2(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p,c)=>p+c,0)
}

console.log(sum2(1, 2, 3, 4, 5, 5))

// type alias
type mul1 = (a:number,b:number)=>number

const xr: mul1 = (r,t) => r * t
console.log(xr(3,2))
