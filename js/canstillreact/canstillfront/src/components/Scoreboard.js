import React from "react";

const Scoreboard = props => {
    return <>
        <h2 className="winner"></h2>
        <div className="scoreboard">
            <div className="win-counter">
                <h4>X wins</h4>
                <h3 id="x-wins">0</h3>
            </div>
            <div className="win-counter">
                <h4>O Wins</h4>
                <h3 id="o-wins">0</h3>
            </div>
            <div className="win-counter">
                <h4>Draws</h4>
                <h3 id="draws">0</h3>
            </div>
        </div>
        <button onClick="resetBoard()">RESET GAME</button>
    </>
}

export default Scoreboard