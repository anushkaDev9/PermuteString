let showPermute = document.getElementById("show-permute");
showPermute.style.display = "none";
let divFrom = document.getElementById("button-display");
let btnDisplay = document.getElementById("button-display");
let formDiv = document.getElementById("form");
console.log(divFrom);
let letters = "";
var i = 0;
let button;
let words = "";
let text;
let word;
let heading;
let btn;
function myFunction() {
  

  formDiv.style.display = "none";
  letters = document.getElementById("input-text").value;
  //console.log(word)
  showPermute = document.getElementById("show-permute");
  showPermute.style.display = "block";
  btnDisplay.style.display = "block";
  words = permute(letters);
  console.log(words);
  text = document.createElement("p");
  text.classList.add("text");
  text.innerHTML = `Text is ${letters}`;
  showPermute.appendChild(text);
  word = words[i];
  for (let j = 0; j < letters.length; j++) {
    button = document.createElement("button");

    button.classList.add("button-letter");
    divFrom.appendChild(button);
  }
  let classBtn = document.getElementsByClassName("button-letter");

  for (let l = 0; l < word.length; l++) {
    classBtn.item(l).innerHTML = word[l];
  }
  
}
function permute(letters) {
  let permutation = [];
  if (letters.length === 1) {
    return letters;
  } //base condition
  for (let i = 0; i < letters.length; i++) {
    let pick = letters[i];
    let remainder = letters.slice(0, i) + letters.slice(i + 1, letters.length);
    for (var perm of permute(remainder)) {
      permutation.push(pick + perm);
    }
  }
  return permutation;
}
function next() {
  
  i = i + 1;
  let word = words[i];
  console.log(document.getElementsByClassName("button-letter").item(0));
  let classBtn = document.getElementsByClassName("button-letter");
  for (let l = 0; l < word.length; l++) {
    classBtn.item(l).innerHTML = word[l];
  }

}
console.log(letters);
function reset() {
 
  let formDiv = document.getElementById("form");
  formDiv.style.display = "block";
  //console.log(word)
  showPermute = document.getElementById("show-permute");
  showPermute.style.display = "none";
  document.getElementById("myForm").reset();

  let get = document.querySelectorAll(".button-letter");
  get.forEach((element) => {
    element.remove();
  });
  let elem = document.querySelectorAll(".text");
  elem.forEach((element) => {
    element.remove();
  });
 
}
