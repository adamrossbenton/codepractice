import React from "react";

const Gameboard = props => {
    return <div class="board">
        <div class="square" id="r1c1" onClick="playTest('r1c1')"></div>
        <div class="square" id="r1c2" onClick="playTest('r1c2')"></div>
        <div class="square" id="r1c3" onClick="playTest('r1c3')"></div>
        <div class="square" id="r2c1" onClick="playTest('r2c1')"></div>
        <div class="square" id="r2c2" onClick="playTest('r2c2')"></div>
        <div class="square" id="r2c3" onClick="playTest('r2c3')"></div>
        <div class="square" id="r3c1" onClick="playTest('r3c1')"></div>
        <div class="square" id="r3c2" onClick="playTest('r3c2')"></div>
        <div class="square" id="r3c3" onClick="playTest('r3c3')"></div>
    </div>

}

export default Gameboard