function multiplyAllPairs(arr1, arr2) {
  let products = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let product = arr1[i] * arr2[j];
      products.push(product);
    }
  }

  // Sort in ascending order
  products.sort((a, b) => a - b);

  console.log(products);
  return products;
}

// Tests
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// Alternate way to loop through arrays
// array1.forEach(number1 => {
//   array2.forEach(number2 => {
//     result.push(number1 * number2);
//   });
// });