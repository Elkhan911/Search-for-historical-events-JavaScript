const input1 = document.querySelector("#_input1");
const span1 = document.querySelector("#_span1");
const span2 = document.querySelector("#_span2");
const yeasrAll = document.querySelectorAll(".years__date");

const obj = {};

// функция для поиска тега
function detectYear(str) {
  let strNoSpaces = str.trim().toLowerCase();
  if (obj[strNoSpaces] == undefined) {
    span1.textContent = strNoSpaces;
    span2.textContent = "Такого года нет в нашей базе";
  } else {
    span1.textContent = strNoSpaces;
    span2.textContent = obj[strNoSpaces];
  }
}

// функция для проверки инпута на пустоту
function checkValue(value) {
  if (value == "" || value == " " || value == "  ") {
    alert("Необходимо ввести год");
    return false;
  } else return true;
}

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (checkValue(this.value)) {
      detectYear(this.value);
      this.value = "";
    }
  }
});

// функция для клика по тегам
function yearActive() {
  for (let year of yeasrAll) {
    year.addEventListener("click", function () {
      detectYear(year.textContent);
    });
  }
}

yearActive();
