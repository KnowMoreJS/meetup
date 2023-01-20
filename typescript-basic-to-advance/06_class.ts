
class Point { 
    x: number; 
    y: number = 0; 
    z = 0;
    constructor(x = 0) {
        this.x = x;
    }
}

class PointV { 
    // x: number; 
    y: number = 0; 
    z = 0;
    constructor( x: number) {
    }
}



interface Animal {
    name: string;
    bark?: (sound: string) => void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    bark() {
        console.log('Woof');
    }      
}

const bruno = new Dog('bruno');

// inheritance
class Husky extends Dog {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
    bark(sound?: string) {
        console.log(`${sound}`);
    }      
}

const echo: Dog = new Husky('bruno');
console.log(echo.bark());

