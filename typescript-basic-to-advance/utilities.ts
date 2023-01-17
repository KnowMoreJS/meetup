interface Car {
    brand: string;
    model: string;
    color?: string;
    isElectric?: boolean;
    mileage?: number;
}

type CarBrands = 'Tata' | 'Mahindra' | 'Maruti'

// Partial<Type> - Returns a type that represents a subset of a given type
let carA: Partial<Car>


// Required<Type> - Returns a type with all properties set to required.
let carB: Required<Car>


// Readonly<Type> - (Object.freeze) the properties of the Returned type cannot be reassigned.
let carC: Readonly<Car>


// Record<Keys, Type> - Maps the properties of a type to another type.
let carD: Record<CarBrands, Car>


// Pick<Type, Keys> - Returns subset of Type consisting properties part of Keys.
let carE: Pick<Car, 'color'>


// Omit<Type, Keys> (inverse of Pick) - Returns subset of Type excluding properties part of Keys.
let carF: Omit<Car, 'color'>


// Exclude<UnionType, ExcludedMembers> (similar to Omit) - Returns subset of UnionTypes excluding types assignable to ExcludedMembers
let carG: Exclude<CarBrands, 'Maruti'>


// Extract<Type, Union> (Inverse of Exclude) - Returns subset of Type, with types assignable to Union
let carH: Extract<CarBrands, 'Suzuki' | 'Tata'>



function makeCar(material: string, color: string) {
    return carA
};

// Parameters<Type>
let utilities: Parameters<typeof makeCar>


// ReturnType<Type>
let carZ: ReturnType<typeof makeCar>




export {}