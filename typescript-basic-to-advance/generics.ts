// GENERIC FUNCTION
function listElement<Type>(arr: Type[], index: number): Type | undefined {
  return arr[index];
}

const firstElement = listElement<number>([1, 2], 0);
const lastElement = listElement(['a', 'b'], 1);


// multiple type vars
function createList(arg1: any, arg2: any): any[] {
  return [arg1, arg2];
}

// constrained types
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}


// GENERIC CLASS
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}


// GENERIC INTERFACE
interface Array<Type> {
  length: number;
  pop(): Type | undefined;
  push(...items: Type[]): number;
  // ...
}




export {}