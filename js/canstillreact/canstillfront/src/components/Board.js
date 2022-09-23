import React from "react";

const Board = props => {
    return <div id="board">
        <div className="row" id="row-one">
            <div className="box column-one"  id="R1C1">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-two"  id="R1C2">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-three"  id="R1C3">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
        </div>
        <div className="row" id="row-two">
            <div className="box column-one"  id="R2C1">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-two"  id="R2C2">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-three"  id="R2C3">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
        </div>
        <div className="row" id="row-three">
            <div className="box column-one" id="R3C1">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-two" id="R3C2">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
            <div className="box column-three" id="R3C3">
                <div className="box-inside">
                    <p>this is a box</p>
                </div>
            </div>
        </div>
    </div>
}

export default Board