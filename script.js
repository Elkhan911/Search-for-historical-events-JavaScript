const input1 = document.querySelector("#_input");
const table = document.querySelector("#_table");
const span1 = document.querySelector("#_span1");

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    span1.textContent = input1.value;
    input1.value = "";
  }
});
