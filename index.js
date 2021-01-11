const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  // console.log(tutorials);
  let j = 0;
  let newTutorials = [];
  for (let i = 0; i < tutorials.length; i++) {
    // debugger;
    let wordArrays = tutorials[i].split(" ");
    let sentanceArray = [];
    for (let j = 0; j < wordArrays.length; j++) {
      if (typeof wordArrays[j] === "string") {
        let uppercase = wordArrays[j][0].toUpperCase();
        sentanceArray.push(uppercase + wordArrays[j].slice(1));
        // debugger;
      }
    }
    newTutorials.push(sentanceArray.join(" "));
  }
  console.log(newTutorials);
  return newTutorials;
};

titleCased();
