import {useState} from "react"

const PlayerHooks = props => {
    
    let myTurn = true
    let gameOver = false
    let winCount = 0
    let loseCount = 0
    let drawCount = 0
    
    const playTest = cell => {
        // Initialize internal cell contents
        const cellContents = document.getElementById(cell).textContent
        
        // Execute game function
        if (gameOver) {
            console.log("The game is over")
        } else {
            if (!cellContents) {
                if (myTurn) {
                    document.getElementById(cell).textContent = "X"
                } else {
                    document.getElementById(cell).textContent = "O"
                }
            checkWin()
            myTurn = !myTurn
            }
        }
    }

    // Check for game over
    const checkWin = () => {
        // Organize board
        const r1 = []
        const r2 = []
        const r3 = []
        let winType = ""
        document.querySelectorAll(".square").forEach((cell) => {
            for (let i = 0; i < 9; i++) {
                switch (i % 3) {
                    case 0:
                        r1.push(cell.innerText)
                        break;
                    case 1:
                        r2.push(cell.innerText)
                        break;
                    case 2:
                        r3.push(cell.innerText)
                        break;
                    default:
                }
            }
        })
        console.log(r1)
        console.log(r2)
        console.log(r3)
    }
}

export default PlayerHooks