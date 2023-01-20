// Object Literal syntax *********
{
  let person = {
    firstName: "Allie",
    lastName: "Grater",
    age: 50,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
}

// Named Types *******************

// type aliases
{
  type UserContactInfo = {
    name: string
    email: string
  }
}

// interfaces
{
  interface UserInfo {
    name: string
    email: string
  }

  // Inheritence

  interface Animal {
    isAlive(): boolean
  }

  interface Mammal extends Animal {
    getFurOrHairColor(): string
  }

  interface Dog extends Mammal {
    getBreed(): string
  }

  // implements

  interface AnimalLike {
    eat(food): void
  }

  class Dog implements AnimalLike {
    bark() {
      return "woof"
    }
    eat(food) {
      
    }
  }

}