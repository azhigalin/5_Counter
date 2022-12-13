let buttons = document.querySelectorAll("button");
let counter = document.querySelector("#count");

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    event.target.textContent == "Increase"
      ? +counter.textContent++
      : +counter.textContent--;
  });
}
