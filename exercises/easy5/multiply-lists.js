function multiplyList(list1, list2) {
  let newList = [];

  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i] * list2[i]);
  }

  return newList;
}

// Tests
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]