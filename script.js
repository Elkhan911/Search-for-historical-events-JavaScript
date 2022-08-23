const input1 = document.querySelector("#_input");
const table = document.querySelector("#_table");
const span1 = document.querySelector("#_span1");

const obj = {
  2000: [
    {
      date: "20.01.2000",
      event: "Событие 1",
      descriptionEvent: "Первое событие",
    },
    {
      date: "20.04.2000",
      event: "Событие 2",
      descriptionEvent: "Второе событие",
    },
    {
      date: "20.09.2000",
      event: "Событие 3",
      descriptionEvent: "Третье событие",
    },
  ],
  2001: [
    {
      date: "20.01.2001",
      event: "Событие 1",
      descriptionEvent: "Первое событие",
    },
    {
      date: "20.04.2001",
      event: "Событие 2",
      descriptionEvent: "Второе событие",
    },
    {
      date: "20.09.2001",
      event: "Событие 3",
      descriptionEvent: "Третье событие",
    },
  ],
  2002: [
    {
      date: "20.01.2001",
      event: "Событие 1",
      descriptionEvent: "Первое событие",
    },
    {
      date: "20.04.2002",
      event: "Событие 2",
      descriptionEvent: "Второе событие",
    },
    {
      date: "20.09.2002",
      event: "Событие 3",
      descriptionEvent: "Третье событие",
    },
  ],
  2002: [
    {
      date: "20.01.2002",
      event: "Событие 1",
      descriptionEvent: "Первое событие",
    },
    {
      date: "20.04.2002",
      event: "Событие 2",
      descriptionEvent: "Второе событие",
    },
    {
      date: "20.09.2002",
      event: "Событие 3",
      descriptionEvent: "Третье событие",
    },
  ],
};

input1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (input1.value in obj) {
      span1.textContent = input1.value;
      input1.value = "";
    } else {
      span1.textContent =
        input1.value + " - неверное значение. Введите любой год с 2000 по 2002";
      input1.value = "";
    }
  }
});

function ShowInfoInTable(str) {
  if (str in obj) {
    let tr = document.createElement("tr");
    table.append(tr);

    let tdDate = document.createElement("td");
    let tdEvent = document.createElement("td");
    let tdDescrpEvent = document.createElement("td");

    tr.append(tdDate, tdEvent, tdDescrpEvent);

    //   for (let arrs in obj) {
    //     // console.log(arrs);
    //     for (let elem of obj[arrs]) {
    //       //   console.log(elem);
    //       for (let key in elem) {
    //         console.log(elem[key]);
    //       }
    //     }
    //   }
  }
}

ShowInfoInTable(2000);
