// Nominal Type Checking
// Examples: C++, Java, and Swift

// Refer type-system.java for eample


// Static type checking
class Person {
  public name: string;
}

class Employee extends Person {
  public price: number;
}

class Product {
  public name: string;
  public price: number;
}

function foo (a: Product): void {}

// No error as structure is same
foo(new Employee())