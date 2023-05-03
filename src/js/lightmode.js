import { printHouse, lightOn, lightOff } from "./house.js";

let house = printHouse();

const $button = document.querySelector(".lightmode");
let $header = document.querySelector("header");
let $background = document.querySelector("body");
const $text = document.querySelectorAll("p");
const $pre = document.querySelectorAll("pre");
const $border = document.querySelectorAll(".border");
const $link = document.querySelectorAll("a");

$button.addEventListener("click", () => {
  if ($button.classList.contains("light")) {
    $button.innerHTML = "dark";
    $background.style.backgroundColor = "#fff";
    $header.style.backgroundColor = "#fff";
    $text.forEach((el) => (el.style.color = "#000"));
    $border.forEach((el) => (el.style.border = "1px solid #000"));

    lightOff(house);
  } else {
    $button.innerHTML = "light";
    $background.style.backgroundColor = "#000";
    $header.style.backgroundColor = "#000";
    $text.forEach((el) => (el.style.color = "#fff"));
    $link.forEach((el) => (el.style.color = "#fff"));
    $border.forEach((el) => (el.style.border = "1px solid #fff"));

    lightOn(house);
  }
  $button.classList.toggle("light");
});

export { house };
