// Array of objects
{
    interface User {
        name?: string;
        id: string;
    }
    const users: User[] = [];
}




// TUPLE
{

    type point2D = [number, number];

    function setPoint(coord: point2D) {
        const x = coord[0];
        const y = coord[1];
        // index past the number of elements -> error
        // const z = coord[2];
        console.log({ x, y });
    }


    // optional property at the end of tuple
    type Either2dOr3d = [number, number, number?];

    function setCoordinate([x, y, z]: Either2dOr3d) {
        console.log({ x, y, z });
    }


    // readonly tuples #1
    function doSomething(pair: readonly [string, number]) {
    //   pair[0] = 'newString';
    }


    // readonly tuples #2
    let point = [3, 4] as const;

    function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
    }

    // distanceFromOrigin(point);
}