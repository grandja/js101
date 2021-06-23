function interleave(arr1, arr2) {
  let combo = [];

  for (let i = 0; i < arr1.length; i++) {
    combo.push(arr1[i]);
    combo.push(arr2[i]);
  }

  return combo;
}

// Tests
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]