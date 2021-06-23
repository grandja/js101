function halvsies (array) {
  let arr1 = array.slice();
  let arr2 = array.slice();
  let combined = [];

  if (array.length % 2 !== 0) {
    arr1 = array.slice(0, (array.length / 2) + 1);
    arr2 = array.slice((array.length / 2) + 1);
  } else {
    arr1 = array.slice(0, array.length / 2);
    arr2 = array.slice(array.length / 2);
  }

  combined.push(arr1);
  combined.push(arr2);
  console.log(combined);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

/* Solution
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}
*/