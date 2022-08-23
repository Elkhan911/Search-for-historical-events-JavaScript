const input1 = document.querySelector("#_input");
const table = document.querySelector("#_table");
const span1 = document.querySelector("#_span1");

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (input1.value > 2000 && input1.value < 2022) {
      span1.textContent = "";
      span1.textContent = input1.value;
      input1.value = "";
    } else {
      span1.textContent =
        input1.value + " -  необходимо ввести год с 2000 до 2022";
    }
  }
});
