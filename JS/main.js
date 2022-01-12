let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "CSS/style.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "CSS/blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "CSS/green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "CSS/purple.css";
  }
  localStorage.setItem("theme", mode);
}

// Typing Effect

const texts = ["Hi, I'm MHD  3BDULBAKI"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 350);
})();


