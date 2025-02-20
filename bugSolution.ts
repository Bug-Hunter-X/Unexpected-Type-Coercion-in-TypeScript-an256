function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Correct usage
console.log(result); // Output: 3

try {
  let result2 = add(1, '2'); // Throws an error
  console.log(result2);
} catch (error) {
  console.error(error); // Output: Error: Both arguments must be numbers
}

//Alternatively use a more strict type check
function addStrict(a: number, b: number): number {
    return a + b;
}

let result3 = addStrict(1,2); // Correct usage
console.log(result3); //Output 3

//This will throw an error at compile time
//let result4 = addStrict(1,'2');