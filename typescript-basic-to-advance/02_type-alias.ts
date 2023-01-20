{
  // with primitives
  type ID = number | string;

  const uuid1: ID = 1234;
  const uuid2: ID = '1234';

}

// defining objects are discussed in objects.ts


{
  // inheritence
  // we can create type aliases that combine existing types with new behavior by using Intersection
  type SpecialDate = Date & { getReason(): string }

  const newYearsEve: SpecialDate = {
    ...new Date(),
    getReason: () => "Last day of the year",
  }
  newYearsEve.getReason
}