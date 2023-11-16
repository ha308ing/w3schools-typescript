/* basic generics */
/*
Generics allow creating 'type variables' which can be used to create
  classes, functions & type aliases
  that don't need to explicitly define the types that they use.
Generics makes it easier to write reusable code.
*/

// functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
function createPairs<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPairs<string, number>("hello", 5));

// classes
// Generics can be used to create generalized classes, like Map.
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString() {
    return `${this.name} ${this._value}`;
  }
}

let n2 = new NamedValue<number>("myNumber");
n2.setValue(5);
console.log(n2.toString());

// type aliases
// Generics in type aliases allow creating types that are more reusable.
// same for interfaces interface Wrapped<T> {}
// Generics can be assigned default values which apply if no other value is specified or inferred.
type Wrapped<T = boolean> = { value: T };

const wrappedNumber: Wrapped<number> = { value: 10 };
const wrappedString: Wrapped<string> = { value: "hello" };
const wrappedDefault: Wrapped = { value: true };

// extends
/*
Constraints can be added to generics to limit what's allowed.
The constraints make it possible to rely on a more specific type when using the generic type.
*/
function createLoggedPairs<S extends string | number, T extends string | number = string>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}
createLoggedPairs<number>(5, "hello");
