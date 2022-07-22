//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//Import components to counter1(SecondCounter) and counter2(SecondCounterV2)
import SecondsCounter from "./component/SecondsCounter.jsx";
import SecondsCounterV2 from "./component/SecondsCounterV2.jsx";

// link with template.html
const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2")

// variable donde cambian los segundos
let seconds = 0;

//Pinta los segundos que pasan a partir de que se cargue la página
setInterval(() => {
    seconds++;

    ReactDOM.render(<SecondsCounter seconds={seconds} />, app1); // Pinta el primer contador que aparece en la página
    ReactDOM.render(<SecondsCounterV2 seconds={seconds} />, app2); // Pinta el segundo contador que aparece en la página
}, 1000)
