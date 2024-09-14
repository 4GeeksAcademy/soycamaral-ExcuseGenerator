/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["Mi profesor", "Mi suegra", "El vecino", "Mi perro", "Mi ex"];

let action = ["aplastó", "quebró", "rompió", "robó"];

let what = [
  "mi computadora",
  "mi celular",
  "mi billetera",
  "mi mate",
  "mi comida",
  "a mi novio"
];

let when = [
  "camino al trabajo",
  "mientras dormía",
  "en la discoteca",
  "mientras me bañaba",
  "mientras programaba"
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandom(anyArray) {
  let max = who.length - 1;
  let min = 0;
  let Random = getRandomNumber(min, max);
  return anyArray[Random];
}

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
