//calculator

let result = document.querySelector(".result");
let history = JSON.parse(localStorage.getItem("history")) || [];
let historyContainer = document.querySelector(".history-container");

function calculate(value) {
  //ინგუთიდან შემოტანილი რიცხვები
  let firstNumber = Number(document.querySelector(".first-number").value);
  let secondNumber = Number(document.querySelector(".second-number").value);
  let count;

  //გამოთვლის ფუნქცია
  if (isNaN !== firstNumber && isNaN !== secondNumber) {
    switch (value) {
      case "+":
        count = firstNumber + secondNumber;
        history.push(`${firstNumber} + ${secondNumber} = ${count}`);
        break;
      case "-":
        count = firstNumber - secondNumber;
        history.push(`${firstNumber} - ${secondNumber} = ${count}`);
        break;
      case "*":
        count = firstNumber * secondNumber;
        history.push(`${firstNumber} * ${secondNumber} = ${count}`);
        break;
      case "/":
        count = firstNumber / secondNumber;
        history.push(`${firstNumber} / ${secondNumber} = ${count}`);
        break;
      case "%":
        count = `${(firstNumber / secondNumber) * 100}%`;
        history.push(`${firstNumber} % ${secondNumber} = ${count}`);
        break;
      case "log":
        count = Math.log(secondNumber) / Math.log(firstNumber);
        history.push(`log base ${firstNumber} of ${secondNumber} = ${count}`);
        break;
      case "sqr":
        count = firstNumber * firstNumber;
        history.push(`Sqr of ${firstNumber} = ${count}`);
        break;
      case "sqrt":
        count = Math.sqrt(firstNumber);
        history.push(`Sqrt of ${firstNumber} = ${count}`);
        break;
    }
  }

  //გამოაქვს გამოთვლა
  result.innerHTML = count;
  //console.log(history);
  //ვინახავთ მონაცებემს ლოკალურ მოხსოვრობაში
  localStorage.setItem("history", JSON.stringify(history));
}

//ისტორიის გამოძახების ფუნქცია
function historyButton() {
  let list = "";
  let historyButton = document.querySelector(".historyButton");
  //let container = document.querySelector(".container");

  //ღილაკისთვის კლასის დამატება რომელიც ცვლის მნიშვნელობას და სტილს
  if (historyButton.innerHTML === "Remove") {
    historyContainer.style.display = "none";
    historyButton.innerHTML = "History";
  } else if (historyButton.innerHTML === "History") {
    historyContainer.style.display = "block";
    historyButton.innerHTML = "Remove";
  }

  //ლუპი, რომელსაც გამოაქვს დამახსოვრებული ელემენტები ლისტის სახით ისტორიაში
  for (let i = 0; i < history.length; i++) {
    list += `<li>${history[i]}</li>`;
  }
  historyContainer.innerHTML = `<ol>${list}</ol>`;
}

//ფუნქცია რომელიც არესეტებს ყველაფერს და საშუალებას გვაძლევს თავიდან დავიწყოთ
function clean() {
  history = [];
  localStorage.removeItem("history");
  historyContainer.innerHTML = history;
}
