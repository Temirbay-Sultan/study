
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".btn");
const cleanAll = document.getElementById("clean");
const result = document.getElementById("result");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document
    .getElementById("clock")
    .setAttribute("datetime", `${hours}:${minutes}:${seconds}`);
}

updateClock();
setInterval(updateClock, 1000);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
    readNumber();
  });
});

function readNumber(){
  if (display.textContent.length > 9) {
      display.style.fontSize = "60px"; 
    } else {
      display.style.fontSize = "93px";
    }
}

cleanAll.addEventListener("click", () => {
  display.textContent = 0;
  display.style.fontSize = "93px";
});

result.addEventListener("click", () => {
  let res = display.textContent;
  res = res.replace(/=/g, "");

  res = res.replace(/×/g, "*");

  res = res.replace(/÷/g, "/");
  

  try {
    display.textContent = math.evaluate(res);
  } catch (err) {
    display.textContent = "Error";
    console.error(err);
  }
});

minus.addEventListener("click", () => {
  let expr = display.textContent;

  let match = expr.match(/(\d+)(?!.*\d)/);

  if (match) {
    let number = match[0];

    if (expr.includes(`(-${number})`)) {
      display.textContent = expr.replace(`(-${number})`, number);
    } else {
      let replaced = `(-${number})`;
      display.textContent =
        expr.slice(0, match.index) + replaced;
    }
  }
});

dot.addEventListener("click",() =>{

})