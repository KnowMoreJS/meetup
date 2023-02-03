// keyof operator

type Point = { [key: number]: number };

type Key = keyof Point;

type List = { [key: string]: boolean };

type Value = keyof List;

// typeof operator

//TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}
// type P = ReturnType<f>; // wrong

type X = ReturnType<typeof f>; // right

// Indexed Access Types

// type Person = { age: number; name: string; alive: boolean };/

const Obj = { age: 5, name: "", alive: false };

type I1 = Person["age" | "name"];

type x = typeof Obj[keyof typeof Obj];

type I2 = Person[keyof Person];

type AliveOrName = "alive" | "name";

type I3 = Person[AliveOrName];

// String literals.

// Property Descriptor and Decorators.
