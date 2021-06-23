function union(arr1, arr2) {
  let combined = [];

  // add numbers from first array
  for (let j = 0; j < arr1.length; j++) {
    combined.push(arr1[j]);
  }

  // add numbers from second array if they have not been added already
  for (let j = 0; j < arr2.length; j++) {
    if (!combined.includes(arr2[j])) {
      combined.push(arr2[j]);
    }
  }

  return combined;
}

// Test
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]