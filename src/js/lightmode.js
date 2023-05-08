import { printHouse, lightOn, lightOff } from "./house.js";

let house = printHouse();

const $lightmode = document.querySelector(".lightmode");
const $button = document.querySelectorAll("button");
let $header = document.querySelector("header");
let $background = document.querySelector("body");
const $text = document.querySelectorAll("p");
const $link = document.querySelectorAll("a");

$lightmode.addEventListener("click", () => {
  if ($lightmode.classList.contains("light")) {
    $lightmode.classList.remove("bi-sun-fill");
    $lightmode.classList.add("bi-sun");
    $background.style.backgroundColor = "var(--ColorWhite)";
    $header.style.backgroundColor = "var(--ColorWhite)";
    $button.forEach((el) => {
      (el.style.backgroundColor = "var(--ColorWhite)"),
        (el.style.color = "var(--TextColor)");
    });
    $text.forEach((el) => (el.style.color = "var(--TextColor)"));
    $link.forEach((el) => (el.style.color = "var(--TextColor)"));
    lightOff(house);
  } else {
    $lightmode.classList.remove("bi-sun");
    $lightmode.classList.add("bi-sun-fill");
    $background.style.backgroundColor = "var(--TextColor)";
    $header.style.backgroundColor = "var(--TextColor)";
    $button.forEach((el) => {
      (el.style.backgroundColor = "var(--ColorDark)"),
        (el.style.color = "var(--ColorWhite)");
    });
    $text.forEach((el) => (el.style.color = "var(--ColorWhite)"));
    $link.forEach((el) => (el.style.color = "var(--ColorWhite)"));
    lightOn(house);
  }
  $lightmode.classList.toggle("light");
});

export { house };
