function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); // Type error is not thrown
console.log(result); // Output: 12