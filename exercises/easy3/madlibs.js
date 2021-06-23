let rlSync = require('readline-sync');

function madlibs() {
  let noun = rlSync.question('Enter a noun: ');
  let verb = rlSync.question('Enter a verb: ');
  let adjective = rlSync.question('Enter an adjective: ');
  let adverb = rlSync.question('Enter an adverb: ');

  let sentence1 = `Do you walk your ${adjective} ${noun} ${adverb}? That's hilarious!`;
  let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
  let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

  console.log(sentence1);
  console.log(sentence2);
  console.log(sentence3);
}

madlibs();