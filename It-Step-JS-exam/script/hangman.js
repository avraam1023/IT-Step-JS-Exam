const words = [];
let word = [];
let changedWord = "";
let randomWord;
let displayWord = document.querySelector(".word");
let latter = document.querySelector(".word-value");
let resultParagraph = document.querySelector(".resultParagraph");
let newWord = document.querySelector(".save");

//ახალი სიტყვების შემოტანის ფუნქცია რომელიც ინახება words მასივში
function saveValue() {
  words.push(newWord.value);
  newWord.value = "";
}

//რენდემო სიტყვის გენერირების ფუნქცია
function generateWord() {
  randomWord = Math.round(Math.random() * (words.length - 1));
  for (let i = 0; i < words[randomWord].length; i++) {
    word.push("_");
  }

  console.log(words[randomWord]);
  displayWord.innerHTML = word;
  changedWord = words[randomWord];
  //console.log(changedWord, word);
  return word, randomWord, changedWord;
}

//სწორი ასოს ან მთლიანი რიცხვის შემოწმების ფუნქცია
function checkLetter() {
  //მთლიანი სიტყვის შემოწმების პირობა
  if (latter.value === changedWord) {
    word = latter.value;
    displayWord.innerHTML = word;
    latter.value = "";
    resultParagraph.innerHTML = "სიტყვა გამოცნობილია";
  }

  //ასოს შემოწმების პირობა
  for (let i = 0; i < changedWord.length; i++) {
    if (latter.value === changedWord[i]) {
      word[i] = latter.value;
      displayWord.innerHTML = word;
      console.log(true);
    }
  }

  let guessedWord = word.join("");
  if (guessedWord == changedWord) {
    resultParagraph.innerHTML = "სიტყვა გამოცნობილია";
  }
  latter.value = "";
  //console.log(word, changedWord, guessedWord);
  //console.log(latter.value);
}

//დარესეტების ღილაკი
function tryAgain() {
  word = [];
  displayWord.innerHTML = "";
  resultParagraph.innerHTML = "";
}

latter.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkLetter();
  }
});

newWord.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveValue();
  }
});
