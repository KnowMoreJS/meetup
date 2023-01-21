
// string **************************

{

  // implicit inference
  let message = "Hello World"
  let color = "red"
  color = 256

  // using explicit type annotation
  let text:string = "text"
  text= 2
}

{
  // Using Object wrappers
  let color = String("red");
}

{
  // Multiline string
  let sentence: string =`Hello, welcome to the world of typescript,
    the typed super of javascript`
}

// inference **********************

{

  // types are inferred if a variable is initialed at the time of creation,
  // if declared afterwards it will be any type
  let message;      //no type is defined.
  let color = "red"

  message = "Hello, World"
  message = 123
  console.log(message, color);

}

// number ****************************

{
  let num1      //no type is defined.
  let num2

  num1=100;
  num2="hello"

  console.log(num1+num2)
}

{
  let num1: number      //no type is defined.
  let num2: number

  num1=100;
  num2="200"

  console.log(num1+num2)
}

{
  let nan = NaN
  // Positive Infinity
  let pos = Infinity;
  let posInf = 3/0;
  // Negative Infinity
  let neg = -Infinity;
  let negInf = Math.log(0);
}

{
  // supports hexadecimal and decimal literals.
  let decimal: number = 10;
  let hex: number = 0xa00d;       //hexadecimal number starts with 0x
  let binary: number = 0b1010;    //binary number starts with 0b
  let octal: number = 0o633;      //octal number starts with 0c
}

// bigInt **********************************

// It can hold numbers larger than 2^53 – 1

{
  let big1 = 9007199254740991n;
  let big2 = BigInt(9007199254099);
}

// Literal Types ****************************

{
  let foo = "foo";
  const bar = "bar";

  foo = "some string";
  bar = "some other string";
}

// Boolean Types *****************************

{
  let isDone = true;         // primitive boolean type
  let isPending:boolean = false;      // primitive boolean type

  console.log(isDone);                //output true
  console.log(isPending);             //output false
}

// Enums **************************************

{
  enum Weekdays {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
  }

  console.log(Weekdays.Monday)         //1
  console.log(Weekdays["Monday"])      //1
  console.log(Weekdays["1"])           //Monday

  let holiday=Weekdays.Sunday;
  console.log(holiday);                //7

  console.log(typeof Weekdays)         //object
  console.log(typeof holiday)          //number
}

{
  enum Weekdays {
    Monday,          //Initialized with zero
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(Weekdays.Monday)         //0
  console.log(Weekdays["Monday"])      //0
  console.log(Weekdays["1"])           //Tuesday
}

// Union Types *********************************

{
  let empId: string | number;
  empId = 111; // OK
  empId = "E111"; // OK
  empId = true; // Compiler Error
}

// There is an intersection type too
// will see this in objects section