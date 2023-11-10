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


