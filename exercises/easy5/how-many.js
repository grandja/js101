let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    // If that word has been entered, add to count
    if (seen[array[idx]]) {
      seen[array[idx]] += 1;
    // If the word hasn't been seen, count = 1
    } else {
      seen[array[idx]] = 1;
    }
  }

  logOccurrences(seen);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

// Tests
countOccurrences(vehicles);