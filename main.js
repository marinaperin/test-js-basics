// Exercise 1

const analyzeText = (string) => {
  let object = {};
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let character = string[i];
    reversedString += character;
  }
  return (object = {
    original: `"${string}"`,
    lowercase: `"${string.toLowerCase()}"`,
    trimmed: `"${string.trim()}"`,
    characterCount: string.trim().length,
    containsJS: string.includes("JS") || string.includes("Javascript"),
    reversed: `"${reversedString}"`,
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


window.addEventListener("load", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => {
    const userText = document.getElementById("userText");
    const inputValue = userText.value;
    const p = document.createElement("p");
    p.innerHTML = inputValue;
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(p);
  });
});


// Bonus Exercise

window.addEventListener("load", () => {
  const body = document.getElementsByTagName("body")[0];
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", () => {
    const userText = document.getElementById("userText");
    const inputValue = userText.value;
    const inputObject = analyzeText(inputValue);
    const p = document.createElement("p");
    const list = document.createElement("ul");
    const keys = Object.keys(inputObject);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = inputObject[key];
      const li = document.createElement("li");
      li.innerHTML = `${key}: ${value},`;
      list.appendChild(li);
    }
    body.appendChild(p);
    p.appendChild(list);
    console.log(body);
  });
});
