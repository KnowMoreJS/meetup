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
    name: string;
    email: string;
  }

  // inheritence
  type UserData = {
    profileUrl: string;
    postIds: string[];
  }

  const user: UserContactInfo & UserData = {
    name: 'my name',
    email: 'email@email.com',
  }

  user
}

// interfaces
{
  interface UserInfo {
    name: string;
    email: string;
  }

  // Inheritence

  interface Animal {
    isAlive(): boolean;
  }

  interface Mammal extends Animal {
    getFurOrHairColor(): string;
  }

  interface Dog extends Mammal {
    getBreed(): string;
  }

  // implements

  interface AnimalLike {
    eat(food): void
  }

  class Dog implements AnimalLike {
    bark() {
      return "woof";
    }
    eat(food) {

    }
  }

}

// Index signatures

{
  const phones: {
    [k: string]: {
      country: string;
      area: string;
      number: string;
    }
  } = {
    home: { country: "+1", area: "211", number: "652-4515" },
    work: { country: "+1", area: "670", number: "752-5856" },
    fax: { country: "+1", area: "322", number: "525-4357" },
  };

  phones.new;
}