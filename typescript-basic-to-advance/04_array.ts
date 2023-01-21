// Arrays
{

    const fileExtensions = ["js", "ts"]
    interface User {
        name?: string;
        id: string;
    }
    const users: User[] = [];
    const newUsers: Array<User> = [];
}




// TUPLE
{

    //          [Year, Make,     Model    ]
    let myCar = [2002, "Toyota", "Corolla"]
    // destructured assignment is convenient here!
    const [year, make, model] = myCar


    type Car =[number, string, string];

    let myNewCar: Car = [
        2002,
        "Toyota",
        "Corolla",
    ]

    myNewCar[0]

    // ERROR: not the right convention
    myNewCar = ["Honda", 2017, "Accord"]

    // Typescipt checks for no of arguments also
    const numPair: [number, number] = [4, 5, 6]

    // Limitation is this does not account for
    // any modifications using operations such as push and pop
    numPair.pop()


}