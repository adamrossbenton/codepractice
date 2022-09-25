import {useState} from "react"

const PlayerHooks = props => {
    
    let myTurn = true
    let gameOver = false
    let winCount = 0
    let loseCount = 0
    let drawCount = 0
    
    const playTest = cell => {
        const cellContents = document.getElementById(cell).textContent
        while (!gameOver) {
            if (myTurn) {
                document.getElementById(cell).textContent = "X"
            } else {
                document.getElementById(cell).textContent = "O"
            }
            checkWin()
            myTurn = !myTurn
        }
    }

    const checkWin = () => {

    }
}

export default PlayerHooks