 import React from "react";
 

// Lógica primer contador de la web

const SecondsCounter = ({seconds}) => {
    const one = Math.floor(seconds / 1) % 10;
    const two = Math.floor(seconds / 10) % 10;
    const three = Math.floor(seconds / 100) % 10;
    const four = Math.floor(seconds / 1000) % 10;  // cada variable pertenece a una posición del contador
    const five = Math.floor(seconds / 10000) % 10;
    const six = Math.floor(seconds / 100000) % 10;

    return (<>
        <div id="container" className="bg-dark bg-gradient">
            <span id="clock" className="frameNumber"><i class="bi bi-clock"></i></span>
            <span className="frameNumber">{six}</span>
            <span className="frameNumber">{five}</span>
            <span className="frameNumber">{four}</span>
            <span className="frameNumber">{three}</span>      
            <span className="frameNumber">{two}</span>
            <span className="frameNumber">{one}</span>
        </div>
    </>)

}

export default SecondsCounter;