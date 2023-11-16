/* classes */
/*
TypeScript adds types and visibility modifiers to JavaScript classes.
*/

// members types
class Person {
  name: string;
  age: number;
}

const p1 = new Person();
p1.age = 25;
p1.name = "Smith";

// members visibility
/*
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it
*/

class Person1 {
  private readonly name: string;

  public constructor(
    name: string,
    public age: number
  ) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }
}

const p2 = new Person1("Peter", 33);
console.log(p2.getName());

// inheritence implements
// Interfaces can be used to define the type a CLASS MUST FOLLOW through the implements keyword.
// can implement many

interface Shape {
  getArea: () => number;
}

interface Colored {
  color: string;
}

class Rectangle implements Shape, Colored {
  constructor(
    protected readonly height: number,
    protected readonly width: number,
    public color: string
  ) {}

  public getArea(): number {
    return this.height * this.width;
  }
  public printArea(): void {
    console.log(`${this.color} is ${this.getArea()}`);
  }
  public toString(): string {
    return `${this.color} rectangle is w: ${this.width} and h: ${this.height}`
  }
}

let r = new Rectangle(3, 4, "red");

// inheritence extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.
// can extend only one

class Square extends Rectangle {
  public constructor(width: number, color: string) {
    super(width, width, color);
  }
  public override toString(): string {
    return `${this.color} square is w: ${this.width}`
  }
}
let s = new Square(12, "pink")
s.printArea()
console.log(s.toString())
console.log(r.toString())

// noImplicitOverride


/* abstract classes */
/* Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
This is done by using the abstract keyword.
Members that are left unimplemented also use the abstract keyword.  */
abstract class Polygon {
  public abstract getArea(): number

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`
  }
}

class Rect extends Polygon {
  public constructor(protected readonly width: number, protected readonly heigth: number) {
    super()
  }

  public override getArea(): number {
    return this.width * this.heigth
  }
}

let rec = new Rect(4, 2)
console.log(rec.toString())
