// Function Type alias
type Greet = (guest?: string) => unknown

function chat(greet?: Greet) {
    greet?.();
    // function body
}



// OVERLOAD SIGNATURES
function fn(x: boolean): void;
function fn(x: string): void;

// IMPLEMENTATION SIGNATURE
function fn(x: boolean | string) {
  // function body
}



// UNKNOWN VS ANY
function fnWithAny(a: any) {
  a.b();
}
function fnWithUnknown(a: unknown) {
    if (typeof a === 'object') {
        Object.prototype.hasOwnProperty.call(a, "b")
    }
}

function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const obj = safeParse('{someRandomString: "cx"}');



// NEVER
function fail(msg: string): never {
  throw new Error(msg);
}