function greetings(array, object) {
  let name = array.join(" ");
  let title = object.title;
  let occupation = object.occupation;

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`);
}


// Test
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);


/* Solution
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
*/