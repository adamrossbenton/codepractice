import React from "react";

const Scoreboard = props => {
    return <>
        <h2 class="winner"></h2>
        <div class="scoreboard">
            <div class="win-counter">
                <h4>X wins</h4>
                <h3 id="x-wins">0</h3>
            </div>
            <div class="win-counter">
                <h4>O Wins</h4>
                <h3 id="o-wins">0</h3>
            </div>
            <div class="win-counter">
                <h4>Draws</h4>
                <h3 id="draws">0</h3>
            </div>
        </div>
        <button onClick="resetBoard()">RESET GAME</button>
    </>
}

export default Scoreboard