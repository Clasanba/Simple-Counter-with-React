 import React from "react";
 

// Lógica segundo contador de la página

 function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

 
const SecondsCounterV2 = ({seconds}) => {
    const [six, five, four, three, two, one] = pad(seconds, 6).split('');

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

export default SecondsCounterV2;