let num = document.querySelector("h2");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let count = 0;

increment.addEventListener("click", function () {
  count++;
  num.innerText = count;
});

decrement.addEventListener("click", function () {
  if (count > 0) {
    count--;
    num.innerText = count;
  }
});

reset.addEventListener("click", function () {
  count = 0;
  num.innerText = count;
});
