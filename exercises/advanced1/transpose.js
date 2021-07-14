function transpose(matrix) {
  let transposed = [];

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
}

// Tests
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]