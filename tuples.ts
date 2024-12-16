//arrays of fixed length and types
const color: [number, number, number] = [255, 255, 0];

//it also maintains the order of types
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

//goodRes.push(123) // this typescript will allow, this is weird behavior and limitations of tuples
