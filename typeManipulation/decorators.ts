// class decorators

// Decorators only get applied once when the class is ran not every time when the instances of the class are created.

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: typeof BugReport) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

class Boat {
  color = "yellow";

  get formattedColor() {
    return `This boats color is ${this.color}`;
  }

  @logError("oops, boat was sunk")
  pilot() {
    throw new Error("error occurred");
    console.log("flies");
  }
}

function logError(message: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    console.log(key);
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(message);
      }
    };
  };
}

new Boat().pilot();
