import { printHouse, lightOn, lightOff } from "./house.js";

let house = printHouse();

const $button = document.querySelector(".lightmode");
let $header = document.querySelector("header");
let $background = document.querySelector("body");
const $text = document.querySelectorAll("p");
const $border = document.querySelectorAll(".border");
const $link = document.querySelectorAll("a");

$button.addEventListener("click", () => {
  if ($button.classList.contains("light")) {
    $button.classList.remove("bi-sun-fill");
    $button.classList.add("bi-sun");
    $background.style.backgroundColor = "var(--ColorWhite)";
    $header.style.backgroundColor = "var(--ColorWhite)";
    $text.forEach((el) => (el.style.color = "var(--TextColor)"));
    $link.forEach((el) => (el.style.color = "var(--TextColor)"));
    $border.forEach((el) => (el.style.border = "1px solid var(--TextColor)"));
    lightOff(house);
  } else {
    $button.classList.remove("bi-sun");
    $button.classList.add("bi-sun-fill");
    $background.style.backgroundColor = "var(--TextColor)";
    $header.style.backgroundColor = "var(--TextColor)";
    $text.forEach((el) => (el.style.color = "var(--ColorWhite)"));
    $link.forEach((el) => (el.style.color = "var(--ColorWhite)"));
    $border.forEach((el) => (el.style.border = "1px solid var(--ColorWhite)"));
    lightOn(house);
  }
  $button.classList.toggle("light");
});

export { house };
