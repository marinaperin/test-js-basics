// Exercise 1

const analyzeText = (string) => {
  let object = {};
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let character = string[i];
    reversedString += character;
  }
  return (object = {
    original: string,
    lowercase: string.toLowerCase(),
    trimmed: string.trim(),
    characterCount: string.trim().length,
    containsJS: string.includes("JS" || "Javascript"),
    reversed: reversedString,
  });
};

// Exercise 2

const fillArray = (numCount, min, max) => {
    let num = [];
    for (let i = 0; i < numCount; i++) {
      const n = Math.floor(Math.random() * (max - min + 1) + min);
      num.push(n);
    }
    return num;
  };
  
  const countOddOrEven = (array) => {
    let oddOrEven = {};
    let oddTotal = 0;
    let evenTotal = 0;
    for (let i = 0; i < array.length; i++) {
      array[i] % 2 === 0 ? evenTotal++ : oddTotal++;
    }
    return (oddOrEven = {
      odd: oddTotal,
      even: evenTotal,
    });
  };


  // Exercise 3

  
