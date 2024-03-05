let randomNumber;
let scoreOutput = document.querySelector(".score");
let generate = document.querySelector(".generate");
let score = JSON.parse(localStorage.getItem("score")) || {
  attempt: 0,
  equal: 0,
};

//რანდომ რიცხვის დაგენერირების ფუნქცია
function random() {
  //ღილაკის სტილის შეცვლის პირობა
  if (generate.innerHTML === "Generate") {
    generate.innerHTML = "Generated!";
    generate.classList.add("generate-update");
  } else if (generate.innerHTML !== "Generate") {
    generate.innerHTML = "Generate";
    generate.classList.remove("generate-update");
  }
  let from = Number(document.querySelector(".from-value").value);
  let to = Number(document.querySelector(".to-value").value);
  randomNumber = Math.round(Math.random() * (to - from) + from);
  return randomNumber;
}

//ჩვენი და რენდომ რიცხვის შედარების ფუნქცია
function check() {
  let guess = Number(document.querySelector(".guess-values").value);
  let output = document.querySelector(".output");
  if (guess > randomNumber) {
    output.innerHTML = "უფრო დაბლა";
    output.style.color = "yellow";
    score.attempt++;
  } else if (guess < randomNumber) {
    output.innerHTML = "უფრო მაღლა";
    output.style.color = "yellow";
    score.attempt++;
  } else if (guess === randomNumber) {
    output.innerHTML = "რიცხვი ნაპოვნია";
    output.style.color = "green";
    score.equal++;
  }

  scoreOutput.innerHTML = `მცდელობა : ${score.attempt};  დამთხვევა : ${score.equal}`;
  localStorage.setItem("score", JSON.stringify(score));
}

//დარესეტების ფუნქცია
function reset() {
  score = {
    attempt: 0,
    equal: 0,
  };
  localStorage.removeItem("score");
  scoreOutput.innerHTML = `მცდელობა : ${score.attempt};  დამთხვევა : ${score.equal}`;
}

//ენთერის დაკლიკების შედეგად შესრულებული ფუნქცია
document.querySelector(".guess-values").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    check();
  }
});
