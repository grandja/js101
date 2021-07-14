function buyFruit(originalList) {
  let newList = [];

  for (let i = 0; i < originalList.length; i++) {
    let item = originalList[i][0];
    let count = originalList[i][1];

    while (count > 0) {
      newList.push(item);
      count--;
    }
  }

  console.log(newList);
  return newList;
}

// Test
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]